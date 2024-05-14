<template>
  <div class="w-full flex py-6">
      <div class="mx-auto container">
        <div class="py-2">
            <p class="text-center">Info Section</p>
                <div class="info">Welcome to Deals Depot, your one-stop destination for all your essential needs! Explore a wide range of products, including electronics, clothing, watches, cosmetics, and fragrances. With our diverse selection, competitive prices, and excellent customer service, we strive to make your shopping experience convenient and enjoyable.</div>
        </div>
          <ul class="list-header">
              <li>
                  <ul class="list">   
                    <p id="faq-info">FAQ</p>
                    <li><p>How can I place an order?</p>
                        To place an order, simply browse through our product categories, select the items you wish to purchase, and proceed to checkout. Follow the prompts to enter your shipping and payment information, and your order will be processed swiftly.</li>
                    <li><p>What payment methods do you accept?</p>
                        We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. Rest assured that your payment information is encrypted and securely processed to ensure your privacy and security.</li>
                    <li><p>How do I track my order?</p>
                        Once your order is dispatched, you will receive a tracking number via email or SMS. You can use this tracking number to monitor the status of your delivery and estimated arrival time.</li>
                    <li><p>What is your return policy?</p>
                        We offer a hassle-free return policy. If you are not completely satisfied with your purchase, you may return the item within 14 days for a full refund or exchange. Please refer to our <RouterLink to="/"><a href="">Returns & Exchanges</a></RouterLink> page for more details.</li>
                  </ul>
              </li>
              <li id="privacy-info">
                  <p>Privacy Policy</p>
                        At Deals Depot, we are committed to protecting your privacy and safeguarding your personal information. Our Privacy Policy outlines how we collect, use, and protect your data when you use our website or services. We adhere to strict security measures to prevent unauthorized access, disclosure, or alteration of your information. By using our website, you consent to the terms outlined in our Privacy Policy.
              </li>
             
             <li id="service-info">
                    <p>Terms of Service</p>
                Please read these Terms of Service carefully before using our website or services. By accessing or using Deals Depot, you agree to be bound by these terms and conditions. These terms govern your use of our website, including any purchases made, and outline your rights and responsibilities as a user. If you do not agree with any part of these terms, you may not access or use our services.</li>
          </ul>
      </div>
  </div>
</template>

<style scoped> 
.list-header{
    @apply list-disc
}
.list{
    @apply list-decimal
}
li{
    @apply py-2 rounded border px-8 my-2
}
a{
    @apply underline
}
p{
    @apply text-2xl font-bold
}
.info{
    @apply max-w-[70%] mx-auto leading-10 text-center text-lg
}

</style>
<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { scroll_div } from '/src/script.js'
const scroll = scroll_div()


function scrollTo() {
    if (scroll.name === 'faq') {
        let anchor = document.querySelector('#faq-info')
        anchor.scrollIntoView()
        anchor.click()
    }
    else if (scroll.name === 'privacy') {
        let anchor = document.querySelector('#privacy-info')
        anchor?.scrollIntoView()
        anchor.click()
    }
    else if (scroll.name === 'service') {
        let anchor = document.querySelector('#service-info')
        anchor?.scrollIntoView()
        anchor.click()
    }
}

onMounted(() => {
    scrollTo()
    scroll.name = 'default'
})
</script>