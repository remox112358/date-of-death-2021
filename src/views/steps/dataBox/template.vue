<template>
  <div :class="styles.root">
    <span>
      <span :class="styles.key">Name:</span> 
      <span :class="styles.value">{{ data?.name ?? 'none' }}</span>
    </span>
    <span>
      <span :class="styles.key">Height:</span> 
      <span :class="styles.value">{{ data?.height ?? 'none' }}</span>
    </span>
    <span>
      <span :class="styles.key">Mass:</span>
      <span :class="styles.value">{{ data?.mass ?? 'none' }}</span>
    </span>
    <span>
      <span :class="styles.key">Hair color:</span>
      <span :class="styles.value">{{ data?.hair_color ?? 'none' }}</span>
    </span>
    <span>
      <span :class="styles.key">Skin color:</span>
      <span :class="styles.value">{{ data?.skin_color ?? 'none' }}</span>
    </span>
    <span>
      <span :class="styles.key">Eye color:</span>
      <span :class="styles.value">{{ data?.eye_color ?? 'none' }}</span>
    </span>
    <span>
      <span :class="styles.key">Birth year:</span>
      <span :class="styles.value">{{ data?.birth_year ?? 'none' }}</span>
    </span>
    <span>
      <span :class="styles.key">Gender:</span>
      <span :class="styles.value">{{ data?.gender ?? 'none' }}</span>
    </span>
  </div>
</template>