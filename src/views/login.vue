<template>
  <div class="container">
    <div class="form">
      <div class="name">Magic Demo</div>
      <el-form ref="form" :rules="rules" label-width="0" :model="form">
        <el-form-item prop="userName">
          <el-input
            v-model="form.userName"
            size="large"
            placeholder="请输入用户名"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><user /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input
            v-model="form.passWord"
            type="password"
            size="large"
            placeholder="请输入密码"
            show-password
          >
            <template #prefix>
              <el-icon class="el-input__icon"><lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-button class="login" type="primary" @click="onSubmit"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>
import { User, Lock } from "@element-plus/icons-vue";
import { userName, passWord } from "@/utils/validate.js";
import { Base64 } from "js-base64";
import { getTheDay } from "@/utils/tools.js";

export default {
  name: "Login",
  data() {
    return {
      form: {
        userName: "user01@dtdx.dev",
        passWord: "user01",
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { validator: userName, trigger: "submit" },
        ],
        passWord: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: passWord, trigger: "submit" },
        ],
      },
    };
  },
  components: {
    User,
    Lock,
  },
  mounted() {
    const code = Base64.encode(getTheDay(), true);
    console.log("周一", getTheDay(), code);
  },
  methods: {
    onSubmit() {
      // const _this = this;
      this.$refs.form.validate((boolean) => {
        if (boolean) {
          const code = Base64.encode(getTheDay(), true);
          localStorage.setItem("Authorization", code);
          this.$router.push("demo");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  display: block;
}

.container {
  position: relative;
  width: vw(1920);
  height: vh(1080);
  background: url("~@/assets/earth.png") center/100% no-repeat;
}
.name {
  width: vw(569);
  height: vh(226);
  background: linear-gradient(
    276.26deg,
    #472bff -10%,
    #bf3dbb 1.66%,
    #8f3dc7 14.29%,
    #e95582 29.02%,
    #fd6066 47.47%,
    #ffa962 50.84%,
    #0bd8e0 71.11%,
    #2e2bff 91.93%
  );
  font-weight: 700;
  font-size: vh(82);
  line-height: vh(226);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  user-select: none;
}
.form {
  position: absolute;
  width: vw(569);
  height: vh(520);
  display: flex;
  flex-direction: column;
  align-items: center;
  top: vh(266);
  left: vw(675);
  ::v-deep .el-input__inner {
    background: rgba(5, 119, 234, 0.1) !important;
    color: #fff;
    font-size: vh(20);
    height: vh(64);
  }
  ::v-deep .el-form {
    width: vw(401);
    text-align: center;
  }
  ::v-deep input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-transition-delay: 111111s;
    -webkit-transition: color 11111s ease-out, background-color 111111s ease-out;
  }
  .login {
    font-size: vh(22);
    width: vw(150);
    height: vh(48);
  }
}
</style>
