// user functions

const newUser = {
    "objName" : "new user",
    "objType" : "request",
    "objData" : { 
        "userId" : "sample name", 
        "userPwd" : "samplePasword",
        "userEmail" : "sampleEmail"
    },
    "objMeta" : {
        "createDate" : "2021-10-10T00:00:00.000Z",
        "status" : 1    // 1 - normal, 0 - cancelled
    }
};

const newUserResponse = {
    "objName" : "new user",
    "objType" : "response",
    "objData" : { 
        "userId" : "sample name", 
        "result" : "done",  // done - registration success, id - id existing, email -email existing
        "success" : true    // true - registration success, false - something wrong 
    },
    "objMeta" : {
        "createDate" : "2021-10-10T00:00:00.000Z",
        "status" : 1
    }
}

const emailVerify = {
    "objName" : "email verify",
    "objType" : "request",
    "objData" : { 
        "userId" : "sample name", 
        "userEmail" : "sampleEmail",
        "verifyCode" : "sampleVerifyCode"
    },
    "objMeta" : {
        "createDate" : "2021-10-10T00:00:00.000Z",
        "status" : 1
    }
}

const emailVerifyResponse = {
    "objName" : "email verify",
    "objType" : "response",
    "objData" : { 
        "userId" : "sample name", 
        "result" : "done",  // done - verify success, code - incorrect verify code, exists - already verified
        "success" : true    // true - verify success, false - something wrong 
    },
    "objMeta" : {
        "createDate" : "2021-10-10T00:00:00.000Z",
        "status" : 1
    }
}

const forgetPasswd = {
    "objName" : "forget passwd",
    "objType" : "request",
    "objData" : { 
        "userId" : "sample name", 
        "userEmail" : "sampleEmail"
    },
    "objMeta" : {
        "createDate" : "2021-10-10T00:00:00.000Z",
        "status" : 1
    }
}

const forgetPasswdResponse = {
    "objName" : "forget passwd",
    "objType" : "response",
    "objData" : { 
        "userId" : "sample name", 
        "userEmail" : "sampleEmail",
        "result" : "done",  // done - reset accepted, incorrect - user ID and email not match
        "success" : true    // true - reset accepted, false - something wrong 
    },
    "objMeta" : {
        "createDate" : "2021-10-10T00:00:00.000Z",
        "status" : 1
    }
}

const changePasswd = {
    "objName" : "forget passwd",
    "objType" : "request",
    "objData" : { 
        "userId" : "sample name", 
        "userPasswd" : "newPasswd",
        "userPasswdOld" : "oldPasswd"
    },
    "objMeta" : {
        "createDate" : "2021-10-10T00:00:00.000Z",
        "status" : 1
    }
}

const changePasswdResponse = {
    "objName" : "forget passwd",
    "objType" : "response",
    "objData" : { 
        "userId" : "sample name", 
        "result" : "done",  // done - password accepted, incorrect - old password not match
        "success" : true    // true - password accepted, false - something wrong 
    },
    "objMeta" : {
        "createDate" : "2021-10-10T00:00:00.000Z",
        "status" : 1
    }
}

const userLogin = {
    "objName" : "user login",
    "objType" : "request",
    "objData" : { 
        "userId" : "sample name", 
        "userPwd" : "samplePasword"
    },
    "objMeta" : {
        "createDate" : "2021-10-10T00:00:00.000Z",
        "status" : 1
    }
};

const userLogin = {
    "objName" : "user login",
    "objType" : "response",
    "objData" : { 
        "userId" : "sample name", 
        "result" : "done",  // done - login success, id - id not existing, password - password incorrect
        "success" : true,    // true - login success, false - something wrong
        "LastLogin" : "2021-10-10T23:20:34.000Z",
        "SessionToken" : "sampleToken"
    },
    "objMeta" : {
        "createDate" : "2021-10-10T00:00:00.000Z",
        "status" : 1
    }
}

// contact tracing functons



// destination covid status

const destList = {
    "objName" : "dest list",
    "objType" : "request",
    "objData" : {
        "userId" : "sample name", 
        "SessionToken" : "sampleToken"
    },
    "objMeta" : {
        "createDate" : "2021-10-10T00:00:00.000Z",
        "status" : 1
    }
};

const destListResponse = {
    "objName" : "dest list",
    "objType" : "response",
    "objData" : { 
        "userId" : "sample name", 
        "result" : "done",  // done - success return list, token - user ID and token not match
        "success" : true,    // true - success return list, false - something wrong 
        "objDestList" : [
            { "DestCode" : "xxx", "DestName" : "yyy", "DestRegion": "zzz" },
            { "DestCode" : "xxx", "DestName" : "yyy", "DestRegion": "zzz" },
            { "DestCode" : "xxx", "DestName" : "yyy", "DestRegion": "zzz" }
        ]
    },
    "objMeta" : {
        "createDate" : "2021-10-10T00:00:00.000Z",
        "status" : 1
    }
}

const destInfo = {
    "objName" : "dest info",
    "objType" : "request",
    "objData" : {
        "userId" : "sample name", 
        "SessionToken" : "sampleToken",
        "DestCode" : "sampleCode"
    },
    "objMeta" : {
        "createDate" : "2021-10-10T00:00:00.000Z",
        "status" : 1
    }
};

const destInfo = {
    "objName" : "dest info",
    "objType" : "response",
    "objData" : { 
        "userId" : "sample name", 
        "result" : "done",  // done - success return info, token - user ID and token not match, code - dest code not found
        "success" : true,    // true - success return info, false - something wrong 
        "objDestInfo" : {
            "destCode" : "sampleCode",
            "covidStatus" : "sampleStatus",
            "boraderControlInfo" : "sampleControlInfo",
            "quarantineInfo " : "sampleQuarantineInfo",
            "LastUpdateDate" : "2021-10-10T00:00:00.000Z"
        }
    },
    "objMeta" : {
        "createDate" : "2021-10-10T00:00:00.000Z",
        "status" : 1
    }
}