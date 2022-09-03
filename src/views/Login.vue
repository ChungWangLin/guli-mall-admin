<template>
  <div class="outBox">
    <div class="loginBox">
      <h3 class="loginTitle">系统登录</h3>
      <el-form
        :model="loginInfo"
        :rules="rules"
        ref="loginForm"
        class="loginForm"
      >
        <el-form-item prop="username">
          <el-input v-model="loginInfo.username" placeholder="用户名">
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginInfo.password"
            placeholder="密码"
          ></el-input>
        </el-form-item>

        <el-form-item class="loginButton">
          <el-button
            type="primary"
            @click="submitForm('loginForm')"
            style="width: 100%"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入用户名！"));
      } else {
        callback();
      }
    };

    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入密码！"));
      } else {
        callback();
      }
    };

    return {
      loginInfo: {
        username: "",
        password: "",
      },
      rules: {
        password: [{ validator: validatePassword, trigger: "blur" }],
        username: [{ validator: validateUsername, trigger: "blur" }],
      },
    };
  },

  methods: {
    submitForm(loginForm) {
      this.$refs[loginForm].validate((valid) => {
        if (valid) {
          this.postRequest("/user/login", this.loginInfo).then((resp) => {
            console.log(resp);
            this.$message({
              message: "登录成功！",
              type: "success",
            });
            this.$router.push('/')
          });
        } else {
          console.log("error!");
        }
      });
    },
  },
};
</script>


<style scoped>
.outBox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loginBox {
  width: 380px;
  border: solid 1px #e5e0e0;
  box-shadow: 0 0 25px #cac6c6;
  border-radius: 15px;
  background: #fff;
}

.loginForm {
  width: 340px;
  margin: 0 auto;
}

.loginTitle {
  height: 60px;
  text-align: center;
  color: #505458;
  line-height: 60px;
}
</style>