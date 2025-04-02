<template>
    <div>
        <LayoutsHeader/>
        <slot></slot>
        <LayoutsFooter v-if="$route.path !== '/contact'"/>
    </div>
</template>
