export default {
  extends: ['@commitlint/cli' ,'@commitlint/config-conventional'],
  rules:{
    "type-enum":[
        2,
        "always",
        [
            "feat", // feature
            "fix",  // bug fix
            "docs", // documentation
            "style",    // Css styling
            "refactor", // refactoring in codebase
            "perf",     // performance improvement
            "test", // change in testcase
            "build",  // change inbuild
            "ci",   // cicd 
            "chore", // dependency update
            "revert"  // undo the wrong changes
        ]
    ],
    "subject-case":[2, "always","sentence-case"]
  }
};
