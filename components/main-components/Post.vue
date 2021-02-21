<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="flex items-center px-4">
      <figure class="flex -space-x-2 overflow-hidden">
        <img
          class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </figure>
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-white">
          <span v-if="user.first_name && user.last_name">
            {{ user.first_name }} {{ user.last_name }}
          </span>
          <span v-else>
            {{ user.username }}
          </span>
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          {{ post.tags }}
        </p>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          {{ post.date }}
        </p>
      </div>
    </div>

    <div class="border-t border-black">
      <dl>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <!-- POST -->
          <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
            {{ post.content }}
          </dd>
        </div>

        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dd
            class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex"
            id="social-icons"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
<style scoped>
#social-icons svg {
  width: 1.5rem;
  margin: 0 0.7rem;
  color: white;
}

#social-icons svg:hover {
  transition: 0.3s;
  cursor: pointer;
}

#social-icons svg:nth-child(1) {
  width: 1.5rem;
  margin-left: 0rem;
}

#social-icons svg:nth-child(1):hover {
  color: blue;
}

#social-icons svg:nth-child(2):hover {
  color: green;
}

#social-icons svg:nth-child(3):hover {
  color: rgb(187, 8, 38);
}

#social-icons svg:nth-child(4):hover {
  color: yellow;
}
</style>
<script>
import { getPostUser } from "~/routes/user";

export default {
  props: ["post"],

  async mounted() {
    this.user = await getPostUser(this.post.user_id).then(res => res.data)
    console.log(this.user)
  },

  data() {
    return {
      user: '',
    }
  },
};
</script>
