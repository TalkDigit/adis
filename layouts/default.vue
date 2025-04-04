<template>
    <div>
        <LayoutsHeader/>
        <slot></slot>
        <LayoutsFooter v-if="$route.path !== '/iletisim' && $route.path !== '/en/contact'"/>
    </div>
</template>
