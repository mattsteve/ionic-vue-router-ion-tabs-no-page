<template>
    <ion-page>
        <ion-content style="--background: transparent;">
            <p>This is page 1</p>
            <ion-button color="primary" expand="block" @click="goNextPage()">
                Go to next page
            </ion-button>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';
import router from '@/router';

@Options({
    name: 'page1-view'
})
export default class RootView extends Vue {
    goNextPage() {
        router.push({ name: 'page2' });
    }
}
</script>
