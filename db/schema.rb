# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_07_04_154011) do
  create_table "channels", force: :cascade do |t|
    t.string "channel_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "discussions", force: :cascade do |t|
    t.string "discussion_title"
    t.text "content"
    t.integer "user_id", null: false
    t.integer "channel_id", null: false
    t.integer "likes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_id"], name: "index_discussions_on_channel_id"
    t.index ["user_id"], name: "index_discussions_on_user_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "image"
    t.string "password_digest"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "replies", force: :cascade do |t|
    t.text "reply_content"
    t.integer "discussion_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discussion_id"], name: "index_replies_on_discussion_id"
    t.index ["user_id"], name: "index_replies_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.boolean "admin_priviledge", default: false
    t.string "password_digest"
    t.string "confirm_password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "discussions", "channels"
  add_foreign_key "discussions", "users"
  add_foreign_key "profiles", "users"
  add_foreign_key "replies", "discussions"
  add_foreign_key "replies", "users"
end
