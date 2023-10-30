<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="6" style="font-size: 15px"><div>存档编辑器</div></el-col>
        <el-col :span="10" style="font-size: 15px"
          ><div>{{ routerTitle }}</div></el-col
        >
        <el-col :span="8" style="font-size: 15px"
          ><div>欢迎您 {{ userAccount }}</div></el-col
        >
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="250px">
        <el-row>
          <el-col>
            <span class="title">存档编辑器</span>
            <ul>
              <li>
                <router-link to="/home/donate">
                  <el-button type="text" icon="el-icon-money">捐赠</el-button>
                </router-link>
              </li>
              <li>
                <router-link to="/home/useinfo">
                  <el-button type="text" icon="el-icon-reading"
                    >使用说明</el-button
                  >
                </router-link>
              </li>
            </ul></el-col
          >
        </el-row>
        <el-row>
          <el-col>
            <span class="title">游戏清单</span>
            <ul>
              <li>
                <router-link to="/home/list">
                  <el-button type="text" icon="el-icon-menu">列表</el-button>
                </router-link>
              </li>
              <li>
                <router-link to="/home/collection">
                  <el-button type="text" icon="el-icon-star-off"
                    >收藏</el-button
                  >
                </router-link>
              </li>
            </ul>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <span class="title">用户</span>
            <ul>
              <li>
                <router-link to="/home/order">
                  <el-button type="text" icon="el-icon-shopping-bag-1"
                    >我的订单</el-button
                  >
                </router-link>
              </li>
              <li>
                <router-link to="/home/invite">
                  <el-button type="text" icon="el-icon-s-promotion"
                    >我的邀请</el-button
                  >
                </router-link>
              </li>
              <li>
                <router-link to="/home/userinfo">
                  <el-button type="text" icon="el-icon-user"
                    >个人中心</el-button
                  >
                </router-link>
              </li>
            </ul></el-col
          >
        </el-row>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      routerTitleArr: [
        "捐赠",
        "使用说明",
        "列表",
        "收藏",
        "我的订单",
        "我的邀请",
        "个人中心",
      ],
      userAccount: localStorage.getItem('userAccount'),
    };
  },
  computed: {
    routerTitle() {
      let path = this.$route.path;
      if (path == "/home/list") {
        return this.routerTitleArr[2];
      } else if (path == "/home/donate") {
        return this.routerTitleArr[0];
      } else if (path == "/home/useinfo") {
        return this.routerTitleArr[1];
      } else if (path == "/home/collection") {
        return this.routerTitleArr[3];
      } else if (path == "/home/order") {
        return this.routerTitleArr[4];
      } else if (path == "/home/invite") {
        return this.routerTitleArr[5];
      } else {
        return this.routerTitleArr[6];
      }
    },
  },
  methods: {
  },
  mounted() {
  },
};
</script>

<style scoped>
.el-container {
  background-color: #e9eef3;
  height: 100vh;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0px;
}

.el-aside {
  background-color: #fff;
  color: #333;
}
.el-aside .el-row {
  height: 150px;
  margin-top: 30px;
  /* background-color: skyblue; */
}
.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 160px;
  margin-left: 150px;
}
ul li button {
  font-size: 18px;
  color: #747678;
  margin-left: 30px;
}
ul li:hover {
  background-color: #ecf5ff;
}
.title {
  height: 20px;
  font-size: 16px;
  margin-left: 20px;
  color: #afb1b4;
}
</style>