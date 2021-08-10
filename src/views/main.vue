<template>
    <ion-tabs id="page-main">
        <ion-tab-bar>
            <ion-tab-button
                tab="home" href="/main/home"
            >
                Home
            </ion-tab-button>
        </ion-tab-bar>
        <ion-tab-bar>
            <ion-tab-button
                tab="feature1" href="/main/feature1"
            >
                Feature 1
            </ion-tab-button>
        </ion-tab-bar>
    </ion-tabs>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';
import router from '@/router';

@Options({
    name: 'main-view'
})
export default class RootView extends Vue {

}
</script>
