<template>
  <div class="login">
    <section class="form_container">
      <div class="manage_tip">
        <span class="title">未定</span>
        <el-form
          :model="loginUser"
          :rules="rules"
          ref="loginForm"
          label-width="100px"
          class="loginForm"
        >
          <el-form-item label="邮箱" prop="account">
            <el-input
              type="email"
              v-model="loginUser.account"
              placeholder="请输入邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="loginUser.password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item class="btn">
            <el-button
              type="primary"
              class="submit_btn"
              @click="submitForm('loginForm')"
              >登录</el-button
            >
          </el-form-item>
          <div class="tip">
            <p>
              忘记密码？<router-link to="/register">重置密码</router-link>
            </p>
          </div>
          <div class="tiparea">
            <p>
              还没有账号？<router-link to="/register">立即注册</router-link>
            </p>
          </div>
        </el-form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "login",

  data() {
    const validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("邮箱不能为空"));
      } else {
        callback();
      }
    };
    return {
      loginUser: {
        account: "",
        password: "",
      },
      rules: {
        account: [
          { validator: validateAccount, trigger: "blur" },
          {
            type: "email",
            required: true,
            message: "邮箱格式不正确",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let res = await this.$API.reqLogin(this.loginUser)
          if(res.code==200){
            this.$message({
              message:'登录成功',
              type:'success'
            })
            localStorage.setItem('userAccount',this.loginUser.account)
            this.$router.push('/home')
          }else {
            this.$message.error(`登录失败,${res.message}`)
          }
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
}
.form_container {
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  text-align: center;
}
.form_container .manage_tip .title {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 26px;
  color: #ccc;
}

.loginForm {
  margin-top: 30px;
  background-color: #fff;
  padding: 40px 50px 20px 0px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}
.btn {
  text-align: center;
  margin-right: 60px;
  margin-left: 15px;
}
.submit_btn {
  width: 100%;
}
.tip {
  margin-left: 50px;
  float: left;
  text-align: left;
  font-size: 12px;
   color: #333;
}
.tip p a {
color: #409eff;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
a {
  text-decoration: none!important;
}
</style>