import { Notify } from "element-ui";

export const respBeanMsg = resp => {
  if (resp.status == 200) {
    Notify({
      title: "成功",
      message: resp.msg,
      type: "success"
    });
  } else {
    Notify.error({
      title: "错误",
      message: resp.msg
    });
  }
};
