class CardModel {
  constructor (id, pic) {
    this.id = id;
    this.pic = pic;
    this.matched = false;
  }
  get imageURL () {
    return `https://picsum.photos/id/${this.pic.id}/300`;
  }

  get picId () {
    return this.pic.id;
  }
}

export default CardModel;
