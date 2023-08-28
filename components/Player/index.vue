<template>
    <div>开发中</div>

    <client-only>
        <!-- <aplayer
            showLrc
            ref="player"
            v-if="playList[0]"
            :music="playList[playIndex]"
            :list="playList"
            :autoplay="autoplay"
            :theme="theme"
            :repeat="repeat"
            :shuffle="shuffle"
            :listMaxHeight="listMaxHeight"
            :listFolded="listFolded"
            :volume="volume"
            @play="onPlay"
            @pause="onPause"
            @timeupdate="onTimeUp"
            @onSelectSong="onSelectSong"
        /> -->
    </client-only>
</template>

<script setup lang="ts">
import { MusicOne, PlayWrong } from '@icon-park/vue-next'
import { ref, nextTick, onMounted } from 'vue'
import { getPlayerList } from '@/api'
import { mainStore } from '@/stores'

const store = mainStore()

// 获取播放器 DOM
const player = ref<null | any>(null)

// 歌曲播放列表
const playList = ref([] as any[])
const playerLrc = ref('')

// 歌曲播放项
const playIndex = ref(0)
const playListCount = ref(0)

// 配置项
const props = defineProps({
    // 音频自动播放
    autoplay: {
        type: Boolean,
        default: false
    },
    // 主题色
    theme: {
        type: String,
        default: '#efefef'
    },
    // 音频循环播放
    repeat: {
        type: String,
        default: 'list' //'list' | 'music' | 'none'
    },
    // 随机播放
    shuffle: {
        type: Boolean,
        default: false
    },
    // 默认音量
    volume: {
        type: Number,
        default: 0.7,
        validator: (value: number) => {
            return value >= 0 && value <= 1
        }
    },
    // 歌曲服务器 ( netease-网易云, tencent-qq音乐, kugou-酷狗, xiami-小米音乐, baidu-百度音乐 )
    songServer: {
        type: String,
        default: 'netease' //'netease' | 'tencent' | 'kugou' | 'xiami' | 'baidu'
    },
    // 播放类型 ( song-歌曲, playlist-播放列表, album-专辑, search-搜索, artist-艺术家 )
    songType: {
        type: String,
        default: 'playlist'
    },
    // id
    songId: {
        type: String,
        default: '7452421335'
    },
    // 列表是否默认折叠
    listFolded: {
        type: Boolean,
        default: false
    },
    // 列表最大高度
    listMaxHeight: {
        type: String,
        default: '420px'
    }
})

// 初始化播放器
onMounted(async () => {
    await nextTick()
    // try {
    //     const res = await getPlayerList(props.songServer, props.songType, props.songId)
    //     playIndex.value = Math.floor(Math.random() * res.length)
    //     playListCount.value = res.length
    //     store.musicIsOk = true
    //     console.log('音乐加载完成', res, playIndex.value, playListCount.value, props.volume)
    //     playList.value = res.map((v: any) => ({
    //         title: v.name || v.title,
    //         artist: v.artist || v.author,
    //         src: v.url,
    //         pic: v.pic,
    //         lrc: v.lrc
    //     }))
    // } catch (error) {
    //     store.musicIsOk = false
    //     ElMessage({
    //         message: '播放器加载失败',
    //         grouping: true,
    //         icon: h(PlayWrong, {
    //             theme: 'filled',
    //             fill: '#efefef'
    //         })
    //     })
    // }
})

// 播放暂停事件
const onPlay = () => {
    console.log('播放')
    store.setPlayerState(player.value!.audio.paused)
    store.setPlayerData(player.value!.audio.currentMusic.title, player.value!.audio.currentMusic.artist)
    ElMessage({
        message: store.getPlayerData.name + ' - ' + store.getPlayerData.artist,
        grouping: true,
        icon: h(MusicOne, {
            theme: 'filled',
            fill: '#efefef'
        })
    })
}

const onPause = () => {
    store.setPlayerState(player.value!.audio.paused)
}

// 音频时间更新事件
const onTimeUp = () => {
    const playerRef = player.value!.$.vnode.el
    if (playerRef) {
        playerLrc.value = playerRef.getElementsByClassName('aplayer-lrc-current')[0].innerHTML
        store.setPlayerLrc(playerLrc.value)
    }
}

// 切换播放暂停事件
const playToggle = () => {
    player.value!.audio.toggle()
}

// 切换音量事件
const changeVolume = (value: number) => {
    player.value!.audio.volume = value
}

const onSelectSong = (val: any) => {
    console.log(val)
}

// 切换上下曲
const changeSong = (type: boolean) => {
    playIndex.value = player.value!.audio.playIndex
    playIndex.value += type ? 1 : -1
    if (playIndex.value < 0) {
        playIndex.value = playListCount.value - 1
    } else if (playIndex.value >= playListCount.value) {
        playIndex.value = 0
    }
    nextTick(() => {
        player.value!.audio.play()
    })
}

// 暴露子组件方法
const expose = {
    playToggle,
    changeVolume,
    changeSong
}
</script>

<style lang="scss" scoped>
.aplayer {
    width: 80%;
    background: transparent;
    border-radius: 6px;
    :deep(.aplayer-body) {
        .aplayer-pic {
            display: none;
        }
        .aplayer-info {
            margin-left: 0;
            background-color: #ffffff40;
            border-color: transparent;
            .aplayer-music {
                flex-grow: initial;
                margin-bottom: 2px;
                overflow: initial;
                .aplayer-title {
                    font-size: 16px;
                    margin-right: 6px;
                }
                .aplayer-author {
                    color: #efefef;
                }
            }
            .aplayer-lrc {
                text-align: left;
                margin: 4px 0 6px 6px;
                height: 100%;
                mask: linear-gradient(#fff 15%, #fff 85%, hsla(0deg, 0%, 100%, 0.6) 90%, hsla(0deg, 0%, 100%, 0));
                -webkit-mask: linear-gradient(#fff 15%, #fff 85%, hsla(0deg, 0%, 100%, 0.6) 90%, hsla(0deg, 0%, 100%, 0));
                &::before,
                &::after {
                    display: none;
                }
                p {
                    color: #efefef;
                }
                .aplayer-lrc-current {
                    font-size: 0.95rem;
                    margin-bottom: 4px !important;
                }
            }
            .aplayer-controller {
                display: none;
            }
        }
    }
    :deep(.aplayer-list) {
        margin-top: 6px;
        ol {
            &::-webkit-scrollbar-track {
                background-color: transparent;
            }
            li {
                border-color: transparent;
                &.aplayer-list-light {
                    background: #ffffff40;
                    border-radius: 6px;
                }
                &:hover {
                    background: #ffffff26 !important;
                    border-radius: 6px !important;
                }
                .aplayer-list-index,
                .aplayer-list-author {
                    color: #efefef;
                }
            }
        }
    }
}
</style>
