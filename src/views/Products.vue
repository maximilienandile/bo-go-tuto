<template>
  <Loader v-if="loading"></Loader>
  <div v-else>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Total Price</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products" :key="product.id">
        <th scope="row">{{ product.id }}</th>
        <td>{{ product.name }}</td>
        <td>{{ product.totalPrice.display }}</td>
        <td>
          <router-link :to="{name:'ProductDetail', params: {productId: product.id}}">
            <button type="button" class="btn btn-primary">See</button>
          </router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Webservice from "../webservice"
import Loader from "@/components/Loader";

export default {
  name: "Products",
  components: {Loader},
  data() {
    return {
      loading: false,
      products: null,
    }
  },
  created() {
    this.loading = true
    Webservice.getProducts("").then((res)=>{
      this.products = res.data
      this.loading = false
    }).catch((err)=> {
      console.error(err)
      this.loading = false
    })
  }
}
</script>

<style scoped>

</style>