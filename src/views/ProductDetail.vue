<template>
  {{product}}
</template>

<script>
import Webservice from "@/webservice";

export default {
  name: "ProductDetail",
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
  }
}
</script>

<style scoped>

</style>