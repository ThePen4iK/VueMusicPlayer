<template>
  <div class="registration">
    <div class="registration__container">
      <input type="checkbox" class="registration__flip" id="flip" />
      <div class="registration__cover">
        <div class="registration__front">
          <svg class="registration__icon" width="153" height="202">
            <use
              xlink:href="../../src/assets/sprite.svg#registration-front"
            ></use>
          </svg>
        </div>
      </div>
      <form @submit="handleSubmit" class="form" autocomplete="off">
        <div class="form__auth">
          <h1 class="form__title">Login</h1>
          <div class="form__wrapper">
            <div class="form__wrap">
              <i class="fas fa-envelope"></i>
              <input
                type="email"
                class="form__input"
                placeholder="Enter your email"
                autocomplete="off"
                readonly
                onfocus="this.removeAttribute('readonly')"
              />
            </div>

            <div class="form__wrap">
              <i class="fas fa-lock"></i>
              <input
                type="password"
                class="form__input"
                placeholder="Enter your password"
                autocomplete="off"
                readonly
                onfocus="this.removeAttribute('readonly')"
              />
            </div>
            <div class="form__forget"><a href="#">Forget password?</a></div>

            <button class="form__btn" type="submit">Sumbit</button>

            <div class="form__text">
              Don't have an account <label for="flip">Signup now</label>
            </div>
          </div>
        </div>

        <div class="form__signup">
          <h1 class="form__title">Signup</h1>
          <div class="form__wrapper">
            <div class="form__wrap">
              <i class="fas fa-user"></i>
              <input
                type="text"
                class="form__input"
                placeholder="Enter your name"
                autocomplete="off"
                readonly
                onfocus="this.removeAttribute('readonly')"
              />
            </div>

            <div class="form__wrap">
              <i class="fas fa-envelope"></i>
              <input
                type="email"
                class="form__input"
                placeholder="Enter your email"
                autocomplete="off"
                readonly
                onfocus="this.removeAttribute('readonly')"
              />
            </div>

            <div class="form__wrap">
              <i class="fas fa-lock"></i>
              <input
                type="password"
                class="form__input"
                placeholder="Enter your password"
                autocomplete="off"
                readonly
                onfocus="this.removeAttribute('readonly')"
              />
            </div>

            <button class="form__btn" type="submit">Sumbit</button>
            <div class="form__text">
              Already have an account <label for="flip"> Login now</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "SignIn",
  methods: {
    ...mapMutations(["setAuth"]),
    handleSubmit(){
      //запрос(логин), проверка юзера
      this.setAuth(true);
      this.$router.push('/')
    }
  },
};
</script>

<style scoped lang="scss">
.registration {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  &__container {
    width: 100%;
    max-width: 850px;
    position: relative;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    //background: #76CCFB;
    background: #ffffff;
    //border-radius: 10px;

    padding: 40px 30px;
    position: relative;
    perspective: 2700px;
    //box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  &__cover {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    z-index: 99;
    transition: all 1s ease;
    transform-origin: left;
    transform-style: preserve-3d;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: #0f1e36;
      opacity: 1;
    }
  }
  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #7d2ae8;
    backface-visibility: hidden;
  }
  &__flip:checked ~ .registration__cover {
    transform: rotateY(-180deg);
  }
  &__flip {
    display: none;
  }
}
.form {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .form__title {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 32px;
    font-weight: 600;
    color: #333333;
    position: relative;

    &:before {
      content: "";
      top: 100%;
      left: 0;
      position: absolute;
      height: 3px;
      width: 25px;
      background: #7d2ae8;
    }
  }

  &__auth {
    width: calc(100% / 2 - 25px);
  }

  &__signup {
    width: calc(100% / 2 - 25px);
  }

  &__wrapper {
    margin-top: 30px;
  }

  &__wrap {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    margin: 10px 0;
    position: relative;

    & i {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      color: #7d2ae8;
      font-size: 18px;
    }
  }

  &__input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    padding: 0 30px;
    background: transparent;

    font-family: " Source Sans Pro", sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;

    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &:focus {
      border-color: rgba(125, 42, 232, 0.9);
    }

    &:valid {
      border-color: rgba(125, 42, 232, 0.9);
    }
  }

  &__btn {
    background: #7d2ae8;
    color: #ffffff;
    border-radius: 6px;
    width: 100%;
    height: 50px;

    margin-top: 40px;
    cursor: pointer;
    transition: all 0.5s ease;

    font-family: " Source Sans Pro", sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
    @media (any-hover: hover) {
      &:hover {
        background: #5b13b7;
        transition: all 0.5s ease;
      }
    }
  }
  &__forget {
    display: inline-block;
    font-family: " Source Sans Pro", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #333333;
    text-decoration: none;
    @media (any-hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &__text {
    margin-top: 10px;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    & label {
      color: #5b13b7;
      cursor: pointer;
      @media (any-hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
