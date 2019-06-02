<template lang="pug">
    b-container
        b-row
            b-col(cols="9")
                slot(name="product-list")
            b-col(cols="3")
                slot(name="cart")

</template>
