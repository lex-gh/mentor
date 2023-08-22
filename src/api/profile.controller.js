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

  async getTags(tags) {
    try {
      let { data } = await supabase.from("mentors").select("tags");
      const res = [
        ...new Set(data.map((item) => item.tags).flat(Infinity)),
      ].map((item) => item.charAt(0).toUpperCase() + item.slice(1));
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  async filterTag(tags) {
    if (!tags.length) {
      return this.getMentors();
    }
    const { data, error } = await supabase
      .from("mentors")
      .select()
      .overlaps("tags", tags);
    console.log(data);
    return data;
  }
  async search(value) {
    try {
      const { data, error } = await supabase
        .from("mentors")
        .select("*")
        .textSearch("fullname", value);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async createProfile(value) {
    try {
      const { data, error } = await supabase
        .from("mentors")
        .insert([
          {
            fullname: value.fullName,
            avatar: "",
            about: value.about,
            experience: value.experience,
            price: value.price,
            tags: value.tags
              .trim()
              .split(",")
              .map((item) => item.charAt(0).toUpperCase() + item.slice(1)),
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

  async createReview(userID, review) {
    try {
      const reviewString = JSON.stringify(review);
      const { data, error } = await supabase
        .from("mentors")
        .select("reviews")
        .eq("id", userID);

      if (data[0].reviews) {
        const newArr = [...data[0].reviews, reviewString].flat(Infinity);
        console.log(newArr);
        await supabase
          .from("mentors")
          .update({
            reviews: newArr,
          })
          .eq("id", userID);
      } else {
        await supabase
          .from("mentors")
          .update({ reviews: [reviewString] })
          .eq("id", userID);
      }

      return { status: 200 };
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Controller();
