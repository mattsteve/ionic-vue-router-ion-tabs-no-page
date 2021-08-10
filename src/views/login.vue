<template>
    <ion-page>
        <ion-content style="--background: transparent;">
            <p>This is the login page</p>
            <ion-button color="primary" expand="block" @click="goNextPage()">
                Login
            </ion-button>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';
import router from '@/router';

@Options({
    name: 'login-view'
})
export default class RootView extends Vue {
    goNextPage() {
        router.replace({ name: 'main' });
    }
}
</script>
