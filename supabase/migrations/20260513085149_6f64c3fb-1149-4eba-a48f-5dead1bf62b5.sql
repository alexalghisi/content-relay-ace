
-- Roluri (separate table, never on profiles)
CREATE TYPE public.app_role AS ENUM ('admin', 'teacher', 'student');

-- Profiles
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  phone TEXT,
  city TEXT,
  bio TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Profiles viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- User roles
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Roles viewable by everyone" ON public.user_roles FOR SELECT USING (true);

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN LANGUAGE SQL STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

-- Subjects (materii)
CREATE TABLE public.subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  icon TEXT,
  description TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.subjects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Subjects readable by all" ON public.subjects FOR SELECT USING (true);

-- Cities (orase)
CREATE TABLE public.cities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  county TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.cities ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Cities readable by all" ON public.cities FOR SELECT USING (true);

-- Teachers (extends profile for teachers)
CREATE TABLE public.teachers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  slug TEXT NOT NULL UNIQUE,
  headline TEXT,
  hourly_rate_min INT,
  hourly_rate_max INT,
  online_available BOOLEAN DEFAULT TRUE,
  in_person_available BOOLEAN DEFAULT FALSE,
  city_id UUID REFERENCES public.cities(id),
  experience_years INT,
  is_verified BOOLEAN DEFAULT FALSE,
  is_published BOOLEAN DEFAULT FALSE,
  rating_avg NUMERIC(3,2) DEFAULT 0,
  rating_count INT DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.teachers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published teachers viewable by all" ON public.teachers FOR SELECT USING (is_published = true OR auth.uid() = user_id);
CREATE POLICY "Teachers manage own row" ON public.teachers FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.teacher_subjects (
  teacher_id UUID NOT NULL REFERENCES public.teachers(id) ON DELETE CASCADE,
  subject_id UUID NOT NULL REFERENCES public.subjects(id) ON DELETE CASCADE,
  PRIMARY KEY (teacher_id, subject_id)
);
ALTER TABLE public.teacher_subjects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Teacher subjects readable by all" ON public.teacher_subjects FOR SELECT USING (true);
CREATE POLICY "Teacher manages own subjects" ON public.teacher_subjects FOR ALL
  USING (EXISTS (SELECT 1 FROM public.teachers t WHERE t.id = teacher_id AND t.user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM public.teachers t WHERE t.id = teacher_id AND t.user_id = auth.uid()));

-- updated_at trigger
CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TRIGGER profiles_touch BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE TRIGGER teachers_touch BEFORE UPDATE ON public.teachers FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.email));
  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'student');
  RETURN NEW;
END; $$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Seed subjects
INSERT INTO public.subjects (slug, name, icon, sort_order) VALUES
('matematica','Matematică','📐',1),
('romana','Limba română','📚',2),
('engleza','Limba engleză','🇬🇧',3),
('informatica','Informatică','💻',4),
('fizica','Fizică','⚛️',5),
('chimie','Chimie','🧪',6),
('biologie','Biologie','🧬',7),
('istorie','Istorie','🏛️',8),
('geografie','Geografie','🌍',9),
('franceza','Limba franceză','🇫🇷',10),
('germana','Limba germană','🇩🇪',11),
('spaniola','Limba spaniolă','🇪🇸',12),
('economie','Economie','💼',13),
('filosofie','Filosofie','🧠',14),
('psihologie','Psihologie','🧩',15),
('logica','Logică','🔣',16),
('desen','Desen','🎨',17),
('muzica','Muzică','🎵',18),
('programare','Programare','⌨️',19),
('python','Python','🐍',20);

INSERT INTO public.cities (slug, name, county, sort_order) VALUES
('bucuresti','București','București',1),
('cluj-napoca','Cluj-Napoca','Cluj',2),
('timisoara','Timișoara','Timiș',3),
('iasi','Iași','Iași',4),
('brasov','Brașov','Brașov',5),
('constanta','Constanța','Constanța',6),
('craiova','Craiova','Dolj',7),
('galati','Galați','Galați',8),
('ploiesti','Ploiești','Prahova',9),
('oradea','Oradea','Bihor',10),
('sibiu','Sibiu','Sibiu',11),
('arad','Arad','Arad',12),
('pitesti','Pitești','Argeș',13),
('bacau','Bacău','Bacău',14);
