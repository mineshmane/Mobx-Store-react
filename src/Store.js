class Store {
    reviewList = [
      // {review: "This is a nice article", stars: 2},
      // {review: "A lovely review", stars: 4},
    //   {email:'',password:''}
    ];
  
    addReview(e) {
      this.reviewList.push(e);
    }
  
    get reviewCount() {
      return this.reviewList.length;
    }
  
    get averageScore() {
      let avr = 0;
      this.reviewList.map(e => avr += e.lstars);
      return Math.round(avr / this.reviewList.length * 100) / 100;
    }
    get getAllData(){
        return this.reviewList.length;
    }
  }
  
  export default Store;