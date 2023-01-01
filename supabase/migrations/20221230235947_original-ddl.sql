create TABLE user_profiles (
    user_id uuid primary key references auth.users (id) not null,
    username text unique not null CONSTRAINT proper_username check (username ~* '^[a-zA-Z0-9_]+$') CONSTRAINT username_length check (
        char_length(username) > 3
        and char_length(username) < 15
    )
);
alter table user_profiles enable row level security;
CREATE policy "all can see" on "public"."user_profiles" as permissive for
select to public using (true);
CREATE policy "users can insert" on "public"."user_profiles" as permissive for
insert to public with check (auth.uid() = user_id);
CREATE policy "owners can update" on "public"."user_profiles" as permissive for
update to public using (auth.uid() = user_id) with check (auth.uid() = user_id);