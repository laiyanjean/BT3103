<template>
  <div id=app>
    <h1>Add Item Page</h1>
    <!-- W8 Problem 2: Adding Fields in UI -->
    <form id="fm1">
        <!-- Field 1: Item Name -->
        <div class="form-group row">
          <label class="col-md-4 col-form-label text-md-right">Item Name</label>
          <!-- Two-way binding using v-model -->
          <input class="col-md-6" type="text" v-model.lazy="item.name" required/>
        </div>

        <div class="form-group row">
        <!-- Field 2: Item Category -->
          <label class="col-md-4 col-form-label text-md-right">Item Category</label>
          <div class="col-md-6" id='category-checkbox'>
            <input type="checkbox" id="fruit" value="Fruit" v-model="item.category"/>
            <label for="fruit">Fruit</label>
            <br>
            <input type="checkbox" id="vegetables" value="Vegetables" v-model="item.category"/>
            <label for="vegetables">Vegetables</label>
            <br>
            <input type="checkbox" id="dairy" value="Dairy" v-model="item.category"/>
            <label for="dairy">Dairy</label>
            <br>
            <input type="checkbox" id="drinks" value="Drinks" v-model="item.category"/>
            <label for="drinks">Drinks</label>
          </div>
        </div>

        <!-- Field 3: Timestamp -->
        <!-- Generated, no need user input -->

        <!-- Field 4: Item Origin -->
        <div class="form-group row">
          <label class="col-md-4 col-form-label text-md-right">Item Origin</label>
          <select class="col-md-6" name="origin-select" v-model="item.origin">
            <option value="" disabled selected>Select an origin</option>
            <option value="Asia">Asia</option>
            <option value="North America">North America</option>
            <option value="Latin America">Latin America</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option> 
          </select>
        </div>

        <!-- save button -->
        <br><br>
        <button v-on:click.prevent="addItem">Add Item</button>
        
    </form>
  </div>
</template>

<script>

import database from '../firebase.js'
export default {

  data(){
    return{
      msg:"Add Item",
      item:{
        name: '',
        category: [],
        timestamp: '',
        origin: '',
      },
    }
  },
  methods:{
    /** W8 Problem 2
     * Save data to firebase
     */
    addItem: function() {
      // setting timestamp
      var today = new Date();
      this.item.timestamp = today.getTime();

      // adding item into database
      database.collection('items').doc().set(this.item);
      // clearing the text fields
      this.item.name = "";
      this.item.category = [];
      this.item.timestamp = "";
      this.item.origin= "";
      // alert
      alert("Item saved successfully");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app *{
    box-sizing: border-box;
}
#app{
    margin: 20px auto;
    max-width: 500px;
}

p{
    align-content: center;
    color:ivory;
}
label{
    display: inline-block;
    margin: 20px 0 10px;
    width:50%;
    align-content:left;

}
input[type="text"]{
    display: inline-block;
    padding: 8px;
    width:50%;
}
</style>