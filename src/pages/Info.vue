<template>
  <div class="w-full flex">
      <div class="mx-auto">
          <ul class="list-disc">   
                                <!-- ^ -->
                                <!-- | list disc тут не работает, но если вынести классы в style,то всё заработает 
                                    (p.s это только один пример, просто тут меня уже припекло и я решил оставить его)  -->
            <li>Abc</li>
          </ul>
      </div>
  </div>
</template>
<!-- 
Info Section
Welcome to Deals Depot, your one-stop destination for all your essential needs! Explore a wide range of products, including electronics, clothing, watches, cosmetics, and fragrances. With our diverse selection, competitive prices, and excellent customer service, we strive to make your shopping experience convenient and enjoyable.

FAQ
1. How can I place an order?
To place an order, simply browse through our product categories, select the items you wish to purchase, and proceed to checkout. Follow the prompts to enter your shipping and payment information, and your order will be processed swiftly.

2. What payment methods do you accept?
We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. Rest assured that your payment information is encrypted and securely processed to ensure your privacy and security.

3. How do I track my order?
Once your order is dispatched, you will receive a tracking number via email or SMS. You can use this tracking number to monitor the status of your delivery and estimated arrival time.

4. What is your return policy?
We offer a hassle-free return policy. If you are not completely satisfied with your purchase, you may return the item within [X] days for a full refund or exchange. Please refer to our Returns & Exchanges page for more details.

Privacy Policy
At Deals Depot, we are committed to protecting your privacy and safeguarding your personal information. Our Privacy Policy outlines how we collect, use, and protect your data when you use our website or services. We adhere to strict security measures to prevent unauthorized access, disclosure, or alteration of your information. By using our website, you consent to the terms outlined in our Privacy Policy.

Terms of Service
Please read these Terms of Service carefully before using our website or services. By accessing or using Deals Depot, you agree to be bound by these terms and conditions. These terms govern your use of our website, including any purchases made, and outline your rights and responsibilities as a user. If you do not agree with any part of these terms, you may not access or use our services. -->
<style scoped> 
.list{
    @apply list-disc 
}

</style>
<script setup>

</script>