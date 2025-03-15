<template>
  <nav class="bg-white shadow-md p-4">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold tracking-wide">Welcome to HYPIC</NuxtLink>
      <ul class="flex space-x-4">
        <li>
            <NuxtLink :to="{name:'first-drop'}" class="text-gray-600 hover:text-gray-800">
                See the First Drop
            </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>