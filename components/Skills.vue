<template>
  <div class="flex items-center flex-col mt-10">
    <div class="flex justify-center flex-wrap">
      <span
        v-for="(skill, index) in skills"
        :key="index"
        class="p-4 flex flex-col items-center"
      >
        <component :is="skill.component" class="w-12 h-12" />
        {{ skill.name }}
      </span>
    </div>
  </div>
</template>

<script>
import { SKILLS } from '@/constants/skills'
export default {
  name: 'TechSkills',
  computed: {
    skills() {
      return SKILLS
    },
  },
}
</script>
