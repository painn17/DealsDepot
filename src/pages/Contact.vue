<template>
    
<ul class="list-header container">
    <p>Contact</p>
    <li>
        
        <p>Get in Touch</p>
        <h5>For any inquiries or questions, feel free to reach out to us.</h5>
        <div class="flex flex-col">
            <span>Phone: +1 (123) 456-7890</span>
            <span>Email: info@dealsdepot.com</span>
        </div>
    </li>
    
    <li>
        <p>Customer Support</p>
        <h5>Our dedicated customer support team is available to assist you with any issues or concerns.</h5>
        <div class="flex flex-col">
            <span>Phone: +1 (987) 654-3210</span>
            <span>Email: support@dealsdepot.com</span>
        </div>
    </li>
</ul>
</template>
<style scoped> 
.list-header{
    @apply text-center 
}
.list{
    @apply list-decimal
}
li{
    @apply py-2 rounded border px-8 my-2 whitespace-break-spaces w-full
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