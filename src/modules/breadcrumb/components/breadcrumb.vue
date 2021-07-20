<template>
    <nav>
        <ol class="breadcrumb">
            <li class="breadcrumb-item d-flex align-items-center" v-for="(crumb, index) in crumbs" :key="index">
                <button class="btn btn-link" :class="{ disabled: isLast(index) }" @click="crumbSelected(crumb)">{{crumb}}</button>
            </li>
        </ol>
    </nav>
</template>
<script>
export default {
    props: {
        crumbs: {
            type: Array,
            required: true
        }
    },
    methods: {
        isLast(index){
            return index === this.crumbs.length - 1;
        },
        crumbSelected(crumb) {
            this.$emit("crumbSelected", crumb);
        }
    }
}
</script>
<style scoped>
.breadcrumb {
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 3px;
}
</style>