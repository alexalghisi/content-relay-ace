export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      admission_papers: {
        Row: {
          created_at: string
          description: string | null
          document_type: string
          id: string
          is_published: boolean
          session: string | null
          slug: string
          storage_path: string
          subject_name: string
          subject_slug: string
          title: string
          university_name: string
          university_slug: string
          updated_at: string
          views_count: number
          year: number
        }
        Insert: {
          created_at?: string
          description?: string | null
          document_type: string
          id?: string
          is_published?: boolean
          session?: string | null
          slug: string
          storage_path: string
          subject_name: string
          subject_slug: string
          title: string
          university_name: string
          university_slug: string
          updated_at?: string
          views_count?: number
          year: number
        }
        Update: {
          created_at?: string
          description?: string | null
          document_type?: string
          id?: string
          is_published?: boolean
          session?: string | null
          slug?: string
          storage_path?: string
          subject_name?: string
          subject_slug?: string
          title?: string
          university_name?: string
          university_slug?: string
          updated_at?: string
          views_count?: number
          year?: number
        }
        Relationships: []
      }
      ads: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_online: boolean | null
          is_promoted: boolean | null
          location: string | null
          phone_reveals_count: number | null
          price_per_hour: number | null
          promoted_until: string | null
          seo_slug: string | null
          session_duration: number | null
          status: string
          subcategories: string | null
          subject_name: string | null
          subject_slug: string | null
          teacher_id: string | null
          title: string
          updated_at: string
          views_count: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_online?: boolean | null
          is_promoted?: boolean | null
          location?: string | null
          phone_reveals_count?: number | null
          price_per_hour?: number | null
          promoted_until?: string | null
          seo_slug?: string | null
          session_duration?: number | null
          status?: string
          subcategories?: string | null
          subject_name?: string | null
          subject_slug?: string | null
          teacher_id?: string | null
          title: string
          updated_at?: string
          views_count?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_online?: boolean | null
          is_promoted?: boolean | null
          location?: string | null
          phone_reveals_count?: number | null
          price_per_hour?: number | null
          promoted_until?: string | null
          seo_slug?: string | null
          session_duration?: number | null
          status?: string
          subcategories?: string | null
          subject_name?: string | null
          subject_slug?: string | null
          teacher_id?: string | null
          title?: string
          updated_at?: string
          views_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ads_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "legacy_teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      bac_crawl_progress: {
        Row: {
          an: number
          attempts: number
          last_attempt_at: string | null
          last_error: string | null
          materie: string
          status: string
          updated_at: string
          uploaded: number
        }
        Insert: {
          an: number
          attempts?: number
          last_attempt_at?: string | null
          last_error?: string | null
          materie: string
          status?: string
          updated_at?: string
          uploaded?: number
        }
        Update: {
          an?: number
          attempts?: number
          last_attempt_at?: string | null
          last_error?: string | null
          materie?: string
          status?: string
          updated_at?: string
          uploaded?: number
        }
        Relationships: []
      }
      bac_rezolvari: {
        Row: {
          an: number
          continut: string
          created_at: string
          dificultate: string
          id: string
          materie: string
          sesiune: string
          slug: string
          status: string
          sursa: string | null
          timp_estimat_minute: number
          titlu: string | null
          updated_at: string
          varianta_id: string | null
        }
        Insert: {
          an: number
          continut: string
          created_at?: string
          dificultate?: string
          id?: string
          materie: string
          sesiune: string
          slug: string
          status?: string
          sursa?: string | null
          timp_estimat_minute?: number
          titlu?: string | null
          updated_at?: string
          varianta_id?: string | null
        }
        Update: {
          an?: number
          continut?: string
          created_at?: string
          dificultate?: string
          id?: string
          materie?: string
          sesiune?: string
          slug?: string
          status?: string
          sursa?: string | null
          timp_estimat_minute?: number
          titlu?: string | null
          updated_at?: string
          varianta_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bac_rezolvari_varianta_id_fkey"
            columns: ["varianta_id"]
            isOneToOne: false
            referencedRelation: "bac_variante"
            referencedColumns: ["id"]
          },
        ]
      }
      bac_variante: {
        Row: {
          an: number
          are_rezolvare: boolean
          barem_path: string | null
          created_at: string
          id: string
          is_published: boolean
          materie: string
          sesiune: string
          slug: string
          specializare: string | null
          subiect_path: string | null
          updated_at: string
        }
        Insert: {
          an: number
          are_rezolvare?: boolean
          barem_path?: string | null
          created_at?: string
          id?: string
          is_published?: boolean
          materie: string
          sesiune: string
          slug: string
          specializare?: string | null
          subiect_path?: string | null
          updated_at?: string
        }
        Update: {
          an?: number
          are_rezolvare?: boolean
          barem_path?: string | null
          created_at?: string
          id?: string
          is_published?: boolean
          materie?: string
          sesiune?: string
          slug?: string
          specializare?: string | null
          subiect_path?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          category: string | null
          clasa: string | null
          content: string | null
          created_at: string
          difficulty: string | null
          duration_minutes: number | null
          education_level: string | null
          exam_session: string | null
          exam_type: string | null
          exam_year: number | null
          excerpt: string | null
          featured_image: string | null
          id: string
          is_published: boolean | null
          profil: string | null
          published_at: string | null
          slug: string
          tags: string[] | null
          title: string
          updated_at: string
          views_count: number | null
        }
        Insert: {
          category?: string | null
          clasa?: string | null
          content?: string | null
          created_at?: string
          difficulty?: string | null
          duration_minutes?: number | null
          education_level?: string | null
          exam_session?: string | null
          exam_type?: string | null
          exam_year?: number | null
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          is_published?: boolean | null
          profil?: string | null
          published_at?: string | null
          slug: string
          tags?: string[] | null
          title: string
          updated_at?: string
          views_count?: number | null
        }
        Update: {
          category?: string | null
          clasa?: string | null
          content?: string | null
          created_at?: string
          difficulty?: string | null
          duration_minutes?: number | null
          education_level?: string | null
          exam_session?: string | null
          exam_type?: string | null
          exam_year?: number | null
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          is_published?: boolean | null
          profil?: string | null
          published_at?: string | null
          slug?: string
          tags?: string[] | null
          title?: string
          updated_at?: string
          views_count?: number | null
        }
        Relationships: []
      }
      cities: {
        Row: {
          county: string | null
          created_at: string
          id: string
          name: string
          slug: string
          sort_order: number | null
        }
        Insert: {
          county?: string | null
          created_at?: string
          id?: string
          name: string
          slug: string
          sort_order?: number | null
        }
        Update: {
          county?: string | null
          created_at?: string
          id?: string
          name?: string
          slug?: string
          sort_order?: number | null
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          created_at: string
          id: string
          is_read: boolean | null
          message: string
          phone: string | null
          sender_email: string
          sender_name: string
          subject: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean | null
          message: string
          phone?: string | null
          sender_email: string
          sender_name: string
          subject?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean | null
          message?: string
          phone?: string | null
          sender_email?: string
          sender_name?: string
          subject?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      conversations: {
        Row: {
          ad_id: string | null
          created_at: string
          id: string
          last_message: string | null
          last_message_at: string
          legacy_teacher_id: string | null
          student_id: string
          student_unread: number
          teacher_id: string
          teacher_unread: number
        }
        Insert: {
          ad_id?: string | null
          created_at?: string
          id?: string
          last_message?: string | null
          last_message_at?: string
          legacy_teacher_id?: string | null
          student_id: string
          student_unread?: number
          teacher_id: string
          teacher_unread?: number
        }
        Update: {
          ad_id?: string | null
          created_at?: string
          id?: string
          last_message?: string | null
          last_message_at?: string
          legacy_teacher_id?: string | null
          student_id?: string
          student_unread?: number
          teacher_id?: string
          teacher_unread?: number
        }
        Relationships: [
          {
            foreignKeyName: "conversations_ad_id_fkey"
            columns: ["ad_id"]
            isOneToOne: false
            referencedRelation: "ads"
            referencedColumns: ["id"]
          },
        ]
      }
      daily_seo_reports: {
        Row: {
          completed_at: string | null
          error_message: string | null
          report_date: string
          reports: Json
          started_at: string
          status: string
        }
        Insert: {
          completed_at?: string | null
          error_message?: string | null
          report_date: string
          reports?: Json
          started_at?: string
          status?: string
        }
        Update: {
          completed_at?: string | null
          error_message?: string | null
          report_date?: string
          reports?: Json
          started_at?: string
          status?: string
        }
        Relationships: []
      }
      email_send_log: {
        Row: {
          created_at: string
          error_message: string | null
          id: string
          message_id: string | null
          metadata: Json | null
          recipient_email: string
          status: string
          template_name: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          recipient_email: string
          status: string
          template_name: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          recipient_email?: string
          status?: string
          template_name?: string
        }
        Relationships: []
      }
      email_send_state: {
        Row: {
          auth_email_ttl_minutes: number
          batch_size: number
          id: number
          retry_after_until: string | null
          send_delay_ms: number
          transactional_email_ttl_minutes: number
          updated_at: string
        }
        Insert: {
          auth_email_ttl_minutes?: number
          batch_size?: number
          id?: number
          retry_after_until?: string | null
          send_delay_ms?: number
          transactional_email_ttl_minutes?: number
          updated_at?: string
        }
        Update: {
          auth_email_ttl_minutes?: number
          batch_size?: number
          id?: number
          retry_after_until?: string | null
          send_delay_ms?: number
          transactional_email_ttl_minutes?: number
          updated_at?: string
        }
        Relationships: []
      }
      email_unsubscribe_tokens: {
        Row: {
          created_at: string
          email: string
          id: string
          token: string
          used_at: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          token: string
          used_at?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          token?: string
          used_at?: string | null
        }
        Relationships: []
      }
      feedback: {
        Row: {
          created_at: string
          id: string
          is_approved: boolean | null
          message: string
          name: string
          rating: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_approved?: boolean | null
          message: string
          name: string
          rating?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_approved?: boolean | null
          message?: string
          name?: string
          rating?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      inbound_emails: {
        Row: {
          body_html: string | null
          body_text: string | null
          from_address: string
          id: string
          is_read: boolean
          received_at: string
          subject: string | null
          to_address: string
        }
        Insert: {
          body_html?: string | null
          body_text?: string | null
          from_address: string
          id?: string
          is_read?: boolean
          received_at?: string
          subject?: string | null
          to_address: string
        }
        Update: {
          body_html?: string | null
          body_text?: string | null
          from_address?: string
          id?: string
          is_read?: boolean
          received_at?: string
          subject?: string | null
          to_address?: string
        }
        Relationships: []
      }
      job_state: {
        Row: {
          consecutive_failures: number
          job: string
          lease_until: string | null
          pause_reason: string | null
          paused: boolean
          updated_at: string
        }
        Insert: {
          consecutive_failures?: number
          job: string
          lease_until?: string | null
          pause_reason?: string | null
          paused?: boolean
          updated_at?: string
        }
        Update: {
          consecutive_failures?: number
          job?: string
          lease_until?: string | null
          pause_reason?: string | null
          paused?: boolean
          updated_at?: string
        }
        Relationships: []
      }
      legacy_teachers: {
        Row: {
          auth_user_id: string | null
          avatar_url: string | null
          bio: string | null
          created_at: string
          education: string | null
          experience_years: number | null
          full_name: string
          id: string
          is_teacher: boolean | null
          location: string | null
          phone: string | null
          updated_at: string
        }
        Insert: {
          auth_user_id?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          education?: string | null
          experience_years?: number | null
          full_name: string
          id: string
          is_teacher?: boolean | null
          location?: string | null
          phone?: string | null
          updated_at?: string
        }
        Update: {
          auth_user_id?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          education?: string | null
          experience_years?: number | null
          full_name?: string
          id?: string
          is_teacher?: boolean | null
          location?: string | null
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      messages: {
        Row: {
          body: string
          conversation_id: string
          created_at: string
          id: string
          read_at: string | null
          sender_id: string
        }
        Insert: {
          body: string
          conversation_id: string
          created_at?: string
          id?: string
          read_at?: string | null
          sender_id: string
        }
        Update: {
          body?: string
          conversation_id?: string
          created_at?: string
          id?: string
          read_at?: string | null
          sender_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletter_subscribers: {
        Row: {
          confirm_token: string
          confirmed_at: string | null
          created_at: string
          email: string
          id: string
          materii: string[]
        }
        Insert: {
          confirm_token?: string
          confirmed_at?: string | null
          created_at?: string
          email: string
          id?: string
          materii?: string[]
        }
        Update: {
          confirm_token?: string
          confirmed_at?: string | null
          created_at?: string
          email?: string
          id?: string
          materii?: string[]
        }
        Relationships: []
      }
      profesor_ai_lectii_gratuite: {
        Row: {
          folosita_la: string | null
          telefon_hash: string
          user_id: string
          verificat_la: string
        }
        Insert: {
          folosita_la?: string | null
          telefon_hash: string
          user_id: string
          verificat_la?: string
        }
        Update: {
          folosita_la?: string | null
          telefon_hash?: string
          user_id?: string
          verificat_la?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          city: string | null
          created_at: string
          display_name: string | null
          id: string
          phone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          city?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          city?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      reviews: {
        Row: {
          ad_id: string | null
          comment: string | null
          created_at: string
          id: string
          rating: number | null
          reviewer_name: string | null
          reviewer_user_id: string | null
          teacher_id: string | null
        }
        Insert: {
          ad_id?: string | null
          comment?: string | null
          created_at?: string
          id?: string
          rating?: number | null
          reviewer_name?: string | null
          reviewer_user_id?: string | null
          teacher_id?: string | null
        }
        Update: {
          ad_id?: string | null
          comment?: string | null
          created_at?: string
          id?: string
          rating?: number | null
          reviewer_name?: string | null
          reviewer_user_id?: string | null
          teacher_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_ad_id_fkey"
            columns: ["ad_id"]
            isOneToOne: false
            referencedRelation: "ads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "legacy_teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      rezolvare_comentarii: {
        Row: {
          autor: string
          created_at: string
          id: string
          is_approved: boolean
          mesaj: string
          rezolvare_an: number
          rezolvare_materie: string
          rezolvare_sesiune: string
        }
        Insert: {
          autor: string
          created_at?: string
          id?: string
          is_approved?: boolean
          mesaj: string
          rezolvare_an: number
          rezolvare_materie: string
          rezolvare_sesiune: string
        }
        Update: {
          autor?: string
          created_at?: string
          id?: string
          is_approved?: boolean
          mesaj?: string
          rezolvare_an?: number
          rezolvare_materie?: string
          rezolvare_sesiune?: string
        }
        Relationships: []
      }
      rezolvari_queue: {
        Row: {
          an: number
          attempts: number
          created_at: string
          error: string | null
          id: string
          materie: string
          prioritate: number
          processed_at: string | null
          sesiune: string
          status: string
        }
        Insert: {
          an: number
          attempts?: number
          created_at?: string
          error?: string | null
          id?: string
          materie: string
          prioritate?: number
          processed_at?: string | null
          sesiune: string
          status?: string
        }
        Update: {
          an?: number
          attempts?: number
          created_at?: string
          error?: string | null
          id?: string
          materie?: string
          prioritate?: number
          processed_at?: string | null
          sesiune?: string
          status?: string
        }
        Relationships: []
      }
      student_requests: {
        Row: {
          access_token: string | null
          budget_per_hour: number | null
          city: string | null
          contact_email: string
          contact_name: string
          contact_phone: string | null
          created_at: string
          details: string | null
          id: string
          is_online: boolean
          level: string | null
          status: string
          subject: string
          teachers_notified_at: string | null
        }
        Insert: {
          access_token?: string | null
          budget_per_hour?: number | null
          city?: string | null
          contact_email: string
          contact_name: string
          contact_phone?: string | null
          created_at?: string
          details?: string | null
          id?: string
          is_online?: boolean
          level?: string | null
          status?: string
          subject: string
          teachers_notified_at?: string | null
        }
        Update: {
          access_token?: string | null
          budget_per_hour?: number | null
          city?: string | null
          contact_email?: string
          contact_name?: string
          contact_phone?: string | null
          created_at?: string
          details?: string | null
          id?: string
          is_online?: boolean
          level?: string | null
          status?: string
          subject?: string
          teachers_notified_at?: string | null
        }
        Relationships: []
      }
      subjects: {
        Row: {
          created_at: string
          description: string | null
          icon: string | null
          id: string
          name: string
          slug: string
          sort_order: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name: string
          slug: string
          sort_order?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          slug?: string
          sort_order?: number | null
        }
        Relationships: []
      }
      suppressed_emails: {
        Row: {
          created_at: string
          email: string
          id: string
          metadata: Json | null
          reason: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          metadata?: Json | null
          reason: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          metadata?: Json | null
          reason?: string
        }
        Relationships: []
      }
      teacher_availability: {
        Row: {
          created_at: string
          end_time: string
          id: string
          start_time: string
          user_id: string
          weekday: number
        }
        Insert: {
          created_at?: string
          end_time: string
          id?: string
          start_time: string
          user_id: string
          weekday: number
        }
        Update: {
          created_at?: string
          end_time?: string
          id?: string
          start_time?: string
          user_id?: string
          weekday?: number
        }
        Relationships: []
      }
      teacher_leads: {
        Row: {
          city: string | null
          consent: boolean
          contacted_at: string | null
          created_at: string
          email: string
          experience: string | null
          full_name: string
          id: string
          phone: string | null
          source: string
          subjects: string
        }
        Insert: {
          city?: string | null
          consent?: boolean
          contacted_at?: string | null
          created_at?: string
          email: string
          experience?: string | null
          full_name: string
          id?: string
          phone?: string | null
          source?: string
          subjects: string
        }
        Update: {
          city?: string | null
          consent?: boolean
          contacted_at?: string | null
          created_at?: string
          email?: string
          experience?: string | null
          full_name?: string
          id?: string
          phone?: string | null
          source?: string
          subjects?: string
        }
        Relationships: []
      }
      teacher_offers: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_in_person: boolean
          is_online: boolean
          level: string | null
          price_per_hour: number | null
          status: string
          subject: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_in_person?: boolean
          is_online?: boolean
          level?: string | null
          price_per_hour?: number | null
          status?: string
          subject: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_in_person?: boolean
          is_online?: boolean
          level?: string | null
          price_per_hour?: number | null
          status?: string
          subject?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      teacher_profiles: {
        Row: {
          about: string | null
          avatar_url: string | null
          city: string | null
          contact_email: string | null
          contact_phone: string | null
          created_at: string
          display_name: string
          experience_years: number | null
          headline: string | null
          id: string
          in_person_available: boolean
          is_published: boolean
          levels: string[]
          online_available: boolean
          rate_max: number | null
          rate_min: number | null
          slug: string
          subjects: string[]
          updated_at: string
          user_id: string
        }
        Insert: {
          about?: string | null
          avatar_url?: string | null
          city?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string
          display_name: string
          experience_years?: number | null
          headline?: string | null
          id?: string
          in_person_available?: boolean
          is_published?: boolean
          levels?: string[]
          online_available?: boolean
          rate_max?: number | null
          rate_min?: number | null
          slug: string
          subjects?: string[]
          updated_at?: string
          user_id: string
        }
        Update: {
          about?: string | null
          avatar_url?: string | null
          city?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string
          display_name?: string
          experience_years?: number | null
          headline?: string | null
          id?: string
          in_person_available?: boolean
          is_published?: boolean
          levels?: string[]
          online_available?: boolean
          rate_max?: number | null
          rate_min?: number | null
          slug?: string
          subjects?: string[]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      teacher_proposals: {
        Row: {
          created_at: string
          id: string
          message: string
          price_per_hour: number | null
          proposed_date: string | null
          proposed_time: string | null
          rated_at: string | null
          rating: number | null
          rating_comment: string | null
          request_id: string
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          price_per_hour?: number | null
          proposed_date?: string | null
          proposed_time?: string | null
          rated_at?: string | null
          rating?: number | null
          rating_comment?: string | null
          request_id: string
          status?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          price_per_hour?: number | null
          proposed_date?: string | null
          proposed_time?: string | null
          rated_at?: string | null
          rating?: number | null
          rating_comment?: string | null
          request_id?: string
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "teacher_proposals_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "student_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      teacher_subjects: {
        Row: {
          subject_id: string
          teacher_id: string
        }
        Insert: {
          subject_id: string
          teacher_id: string
        }
        Update: {
          subject_id?: string
          teacher_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "teacher_subjects_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teacher_subjects_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      teachers: {
        Row: {
          city_id: string | null
          created_at: string
          experience_years: number | null
          headline: string | null
          hourly_rate_max: number | null
          hourly_rate_min: number | null
          id: string
          in_person_available: boolean | null
          is_published: boolean | null
          is_verified: boolean | null
          online_available: boolean | null
          rating_avg: number | null
          rating_count: number | null
          slug: string
          updated_at: string
          user_id: string
        }
        Insert: {
          city_id?: string | null
          created_at?: string
          experience_years?: number | null
          headline?: string | null
          hourly_rate_max?: number | null
          hourly_rate_min?: number | null
          id?: string
          in_person_available?: boolean | null
          is_published?: boolean | null
          is_verified?: boolean | null
          online_available?: boolean | null
          rating_avg?: number | null
          rating_count?: number | null
          slug: string
          updated_at?: string
          user_id: string
        }
        Update: {
          city_id?: string | null
          created_at?: string
          experience_years?: number | null
          headline?: string | null
          hourly_rate_max?: number | null
          hourly_rate_min?: number | null
          id?: string
          in_person_available?: boolean | null
          is_published?: boolean | null
          is_verified?: boolean | null
          online_available?: boolean | null
          rating_avg?: number | null
          rating_count?: number | null
          slug?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "teachers_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      bac_pdf_names: { Args: { _prefix?: string }; Returns: string[] }
      delete_email: {
        Args: { message_id: number; queue_name: string }
        Returns: boolean
      }
      email_queue_dispatch: { Args: never; Returns: undefined }
      enqueue_email: {
        Args: { payload: Json; queue_name: string }
        Returns: number
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      move_to_dlq: {
        Args: {
          dlq_name: string
          message_id: number
          payload: Json
          source_queue: string
        }
        Returns: number
      }
      read_email_batch: {
        Args: { batch_size: number; queue_name: string; vt: number }
        Returns: {
          message: Json
          msg_id: number
          read_ct: number
        }[]
      }
      slugify_ro: { Args: { input: string }; Returns: string }
    }
    Enums: {
      app_role: "admin" | "teacher" | "student"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "teacher", "student"],
    },
  },
} as const
