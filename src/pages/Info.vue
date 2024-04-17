<template>
  <div class="w-full flex">
      <div class="mx-auto">
          <ul class="list">   
                                <!-- ^ -->
                                <!-- | list disc тут не работает, но если вынести классы в style,то всё заработает 
                                    (p.s это только один пример, просто тут меня уже припекло и я решил оставить его)  -->
            <li>Abc</li>
          </ul>
      </div>
  </div>
</template>
<style scoped> 
.list{
    @apply list-disc 
}

</style>
<script setup>

</script>