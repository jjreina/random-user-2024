export class Person {
  #name_first;
  #name_last;
  #mail;
  #phone;
  #location;
  #picture;

  constructor(name_first, name_last) {
    this.#name_first = name_first;
    this.#name_last = name_last;
  }

  get name_first() {
    return this.#name_first;
  }

  set name_first(name_first) {
    return (this.#name_first = name_first);
  }

  get name_last() {
    return this.#name_last;
  }

  set name_last(name_last) {
    return (this.#name_last = name_last);
  }

  get mail() {
    return this.#mail;
  }

  set mail(mail) {
    return (this.#mail = mail);
  }

  get phone() {
    return this.#phone;
  }

  set phone(phone) {
    return (this.#phone = phone);
  }

  get location() {
    return this.#location;
  }

  set location(location) {
    return (this.#location = location);
  }

  get picture() {
    return this.#picture;
  }

  set picture(picture) {
    return (this.#picture = picture);
  }
}
