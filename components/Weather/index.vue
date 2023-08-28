<template>
    <div class="weather">
        <span v-if="weatherData">{{ weatherData.city }}&nbsp;</span>
        <span v-if="weatherData">{{ weatherData.weather }}&nbsp;</span>
        <span v-if="weatherData">{{ weatherData.temperature }}℃</span>
        <span class="sm-hidden" v-if="weatherData">&nbsp;{{ weatherData.winddirection }}风&nbsp;</span>
        <span class="sm-hidden" v-if="weatherData">{{ weatherData.windpower }}&nbsp;级</span>
        <span v-else>天气数据获取失败</span>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getAdcode, getWeather } from '@/api'

// 天气数据
const weatherData = ref(null)

// 获取天气数据
const getWeatherData = async () => {
    const { code, data } = await getAdcode()
    if (code === 1) {
        const { city, adcode } = data

        const { status, lives } = await getWeather(adcode, city)
        if (status === '1') {
            const { weather, temperature, winddirection, windpower } = lives[0]
            weatherData.value = {
                city,
                weather,
                temperature,
                winddirection,
                windpower
            }
        }
    }
}

onMounted(() => {
    // 调用获取天气
    getWeatherData()
})
</script>
