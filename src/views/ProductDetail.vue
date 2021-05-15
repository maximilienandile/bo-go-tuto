<template>
  <Loader v-if="loading"></Loader>
  <form v-else>
    <div class="mb-3">
      <label for="inputCategoryId" class="form-label">Category:</label>
      <input v-model="product.categoryId" type="text" class="form-control" id="inputCategoryId" >
    </div>
    <div class="mb-3">
      <label for="inputName" class="form-label">Name:</label>
      <input v-model="product.name" type="text" class="form-control" id="inputName" >
    </div>
    <div class="mb-3">
      <label for="inputImage" class="form-label">Image:</label>
      <input v-model="product.image" type="text" class="form-control" id="inputImage" >
    </div>
    <div class="mb-3">
      <label for="inputshortDescription" class="form-label">Short Description:</label>
      <input v-model="product.shortDescription" type="text" class="form-control" id="inputshortDescription" >
    </div>
    <div class="mb-3">
      <label for="inputdescription" class="form-label">Description:</label>
      <textarea v-model="product.description"  class="form-control" id="inputdescription" rows="3"></textarea>
    </div>

    <div class="mb-3">
      <label for="inputPriceVATEXc" class="form-label">Price VAT Exc:</label>
      <input v-model="product.priceVatExcluded.amount" type="number"  class="form-control" id="inputPriceVATEXc">
      <input v-model="product.priceVatExcluded.currency" type="text"  class="form-control" id="inputCurrency">
    </div>
    <div class="mb-3">
      <label for="inputPriceVAT" class="form-label">VAT:</label>
      <input v-model="product.vat.amount" type="number"  class="form-control" id="inputPriceVAT">
      <input v-model="product.vat.currency" type="text"  class="form-control" id="inputCurrencyVAT">
    </div>
    <p>Total Price VAT Inc : {{product.totalPrice.display}}</p>

    <button  class="btn btn-primary" @click="onClickSubmit">Submit</button>
  </form>
</template>

<script>
import Webservice from "@/webservice";
import Loader from "@/components/Loader";

export default {
  name: "ProductDetail",
  components: {Loader},
  data() {
    return {
      loading: false,
      product: null,
    }
  },
  props: {
    productId: String,
  },
  created() {
    this.loading = true
    Webservice.getProductByID(this.productId).then((res)=>{
      this.product = res.data
      this.loading = false
    }).catch((err)=> {
      console.error(err)
      this.loading = false
    })
  },
  methods:{
    onClickSubmit(){
      // when we update the product
    }
  }
}
</script>

<style scoped>

</style>