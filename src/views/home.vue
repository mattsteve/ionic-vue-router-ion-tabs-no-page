<template>
    <ion-page>
        <ion-content style="--background: transparent;">
            <p>This is the home page (inside of main's ion-tabs)</p>
            <ion-button color="primary" expand="block" @click="logout()">
                Logout
            </ion-button>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';
import router from '@/router';

@Options({
    name: 'home-view'
})
export default class RootView extends Vue {
    logout() {
        router.replace({ name: 'login' });
    }
}
</script>
