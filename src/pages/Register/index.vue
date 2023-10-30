<template>
  <div class="register">
    <section class="form_container">
      <div class="manage_tip">
        <span class="title">未定</span>
        <el-form
          :model="registerUser"
          :rules="rules"
          ref="registerForm"
          label-width="100px"
          class="registerForm"
        >
          <el-form-item label="用户名" prop="userName" class="userName">
            <el-input
              type="text"
              v-model="registerUser.userName"
              placeholder="请输入用户名"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="account" class="email">
            <el-input
              type="email"
              v-model="registerUser.account"
              placeholder="请输入邮箱"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="registerUser.password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="password2">
            <el-input
              type="password"
              v-model="registerUser.password2"
              placeholder="请确认密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="邀请码" prop="invitationCode">
            <el-input
              v-model="registerUser.invitationCode"
              placeholder="请输入邀请码"
            ></el-input>
          </el-form-item>
          <el-form-item class="btn">
            <el-button
              type="primary"
              class="submit_btn"
              @click="submitForm('registerForm')"
              >注册</el-button
            >
          </el-form-item>
          <div class="tiparea">
            <p>已有账号？立即<router-link to="/login">登录</router-link></p>
          </div>
        </el-form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "register",
  components: {},
  data() {
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("确认密码不能为空!"));
      } else if (value !== this.registerUser.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    const validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    const validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("邮箱不能为空"));
      } else {
        callback();
      }
    };
    const validatePass1 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    const validateInvt = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("邀请码不能为空"));
      } else {
        callback();
      }
    };
    return {
      registerUser: {
        account: "",
        userName: "",
        password: "",
        invitationCode: "",
        password2: "",
      },
      rules: {
        userName: [{ validator: validateUserName, trigger: "blur" }],
        account: [{ validator: validateAccount, trigger: "blur"},{
            type: "email",
            message: "邮箱格式不正确",
            trigger: "blur",
          }],
        password: [
          { validator: validatePass1, trigger: "blur" },
          { min: 6, max: 16, message: "长度在6-16位之间", trigger: "blur" },
        ],
        password2: [{ validator: validatePass2, trigger: "blur" }],
        invitationCode: [{ validator: validateInvt, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          delete this.registerUser.password2;
          let res = await this.$API.reqRegister(this.registerUser);
          if (res.code == 200) {
            this.$message({
              message: "注册成功",
              type: "success",
            });
            this.$router.push("/login");
          } else {
            this.$message.error(`注册失败,${res.message}`)
          }
        }
      });
    },
  },
};
</script>

<style scoped>
.register {
  /* position: relative; */
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
.form_container {
  width: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 25px;
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
.registerForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 35px 40px 20px 10px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #ccc;
}
.btn {
  text-align: center;
  margin-right: 70px;
  margin-left: 60px;
}
.submit_btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
.email {
  position: relative;
}
.emailEnd {
  width: 45%;
  height: 100%;
  position: absolute;
  right: 0px;
  top: 0px;
}
</style>