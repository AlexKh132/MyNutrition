export default class AppData{
  constructor(){
      this.food = [];
  }

  addFood(carbs, protein, fat){
      carbs = Number.parseInt(carbs, 10);
      protein = Number.parseInt(protein, 10);
      fat = Number.parseInt(fat, 10);
      this.food.push({carbs, protein, fat});
  }

  getTotalFat(){
      return this.#getTotal("fat");
  }

  getTotalProtein(){
      return this.#getTotal("protein");
  }

  getTotalCarbs(){
      return this.#getTotal("carbs");
  }

  #getTotal(value){
      return this.food.reduce((total, current) => {
          return total + current[value];
      }, 0)
  }

  getTotalCalories(){
    return (this.getTotalFat() * 9) + (this.getTotalCarbs() * 4 ) + (this.getTotalProtein() * 4)
  }
}
