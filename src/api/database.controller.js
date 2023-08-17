import { supabase } from "./database.config";
import Storage from "./storage.service";

class Controller {
  async getMentors() {
    try {
      let { data } = await supabase.from("mentors").select();

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async createProfile(value) {
    try {
      console.log(value);
      const { data, error } = await supabase
        .from("mentors")
        .insert([
          {
            fullname: value.fullName,
            nickname: value.nickname,
            avatar: "",
            about: value.about,
            experience: value.experience,
            price: value.price,
            tags: value.tags.split(","),
          },
        ])
        .select();

      if (error) throw new Error(error);

      const avatarPath = await Storage.setAvatar(data[0].id, value.avatar);

      await supabase
        .from("mentors")
        .update({ avatar: avatarPath })
        .eq("id", data[0].id)
        .select();

      // data[0].avatar = Storage.getAvatar(avatarPath);
      return { status: 200, id: data[0].id };
    } catch (error) {
      return error;
    }
  }

  async getOneMentors(id) {
    try {
      const { data, error } = await supabase
        .from("mentors")
        .select()
        .eq("id", id);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Controller();
