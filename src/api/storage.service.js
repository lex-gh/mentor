import { supabase } from "./database.config";

class Storage {
  /**
   *  Добавление фотографии в хранилище
   * @param {number} id Идентификатор пользователя
   * @param {object} file Обьект фотографии
   * @returns Имя картинки с расширением
   */
  async setAvatar(id, file) {
    try {
      if (!file) throw new Error("Avatar is not defined");

      const fileExt = file.name.split(".").pop();
      const filePath = `${id}.${fileExt}`;

      const { data, error } = await supabase.storage
        .from("mentors")
        .upload(filePath, file);

      if (error) throw new Error(error);
      return data.path;
    } catch (error) {
      return error;
    }
  }
  /**
   * Получение публичной ссылки на фотографию
   * @param {string} filename Имя картинки с расширением
   * @returns Публичная ссылка на картинку
   */
  getAvatar(filename) {
    try {
      const { data, error } = supabase.storage
        .from("mentors")
        .getPublicUrl(filename);

      if (error) throw new Error(error);

      return data.publicUrl;
    } catch (error) {
      return error;
    }
  }
}

export default new Storage();
