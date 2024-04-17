
async function getProduct(quantity) {
    let response
    let json = ref([])

    try {
        response = await fetch(`https://dummyjson.com/products/categories`)
        json = await response.json();
    }
    // ?limit=${quantity}
    catch (error) { console.error('Ошибка при получении данных:', error) }; // Обрабатываем возможные ошибки
    console.log(json);
    return json
}