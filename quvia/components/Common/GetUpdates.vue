<template>
  <div class="search-form" :class="{'search-form-small': !!isSmall, 'search-form-submit': emailSubmit}">
    <template v-if="!emailSubmit">
      <input type="input" class="search-field" placeholder="Get Updates..."
             v-model="email" v-on:keyup="handleKeyUp">
      <i class='bx bx-mail-send'></i>
      <div class="search-form-msg" :class="{'search-form-msg-invalid': !emailValid}">Invalid email address</div>
    </template>
    <div class="search-form-msg-valid" v-else>
      <div>Thank you!</div>
      <div>Your submission has been received!</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GetUpdates',
  components: {},

  data() {
    return {
      email: '',
      emailValid: true,
      emailSubmit: false
    }
  },

  props: ['isSmall'],

  methods: {
     handleKeyUp: async function(event) {
      event.preventDefault();
      this.emailValid = true;

      if (event.keyCode === 13) {
        if (!this.validateEmail(this.email)) {
          this.emailValid = false;
        } else {
          const today = new Date();
          try {
            await this.$strapi.create('emails',
              {
                name: this.email,
                time: today.toISOString().substring(0, 19).replace('T', ' ')
              }
            )
          } catch (error) {
            console.log(error)
          }

          this.emailValid = true;
          this.emailSubmit = true;
        }
      }
    },
    validateEmail: function (email) {
      if (!email) {
        return false;
      }
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
}
</script>

<style scoped>
.search-form {
  position: relative;
}
.search-form.search-form-submit {
  transform: translate(0, 5px);
  height: 50px;
  background: #eee;
  padding-left: 10px;
}

.search-form-msg {
  position: absolute;
  left: 5px;
  top: -20px;
  font-style: italic;
  font-size: 12px;
  display: none;
}

.search-form-msg-invalid {
  display: inline;
  color: #ff0033;
}

.search-form-msg-valid {
  font-size: 12px;
  font-style: italic;
  color: #4D4D4D;
  text-align: left;
}

.search-form-small .search-form-msg {
  top: auto;
  bottom: -20px;
}
</style>
