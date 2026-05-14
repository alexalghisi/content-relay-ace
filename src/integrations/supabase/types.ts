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
          teacher_id: string | null
        }
        Insert: {
          ad_id?: string | null
          comment?: string | null
          created_at?: string
          id?: string
          rating?: number | null
          reviewer_name?: string | null
          teacher_id?: string | null
        }
        Update: {
          ad_id?: string | null
          comment?: string | null
          created_at?: string
          id?: string
          rating?: number | null
          reviewer_name?: string | null
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
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
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
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
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
