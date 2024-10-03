# How to push your work to GitHub

### 1. Create a new branch
- The last thing we would want to do will be pushing our works  straight to the main branch. There will be a chance to make mistakes or edit something that we've pushed before, so creating a new branch will be the safest choice.
    - `git clone` this repository
    - After cloning, `git branch -a` to see what branch you are in. You would probably be in the main branch as default.
    - `git checkout -b <whatever-you-want-as-a-new-branch-name>` to create a new branch named `whatever-you-want-as-a-new-branch-name` and check out to that branch.

### 2. Commit your work(s)
- We just created a new branch and it's time to push our works to it. We'll bundle our works into a commit(s) and the commit(s) will be pushed to our GitHub repo. <br>
To create a commit, we're going to do `git add` and `git commit` to tag what this commit is about.
    - `git add file-name-you-want-to-push` <br>
    You can `git add` as many files you want within one commit.
    - `git commit -m "meaningful-sentence"` <br>
    `meaningfu-sentence` should be one or two sentence(s) briefly explaining what this commit is about.
- Repeat step 2 if you want to commit more than one. Sometimes 2-3 commits are needed to clarify what our works.

### 3. Push your commit(s)
- Now it's time to push our commits on local to our GitHub repo.
    - `git push` <br>
    It might throw you an error message since the branch we're trying to push to is a brand new branch. Follow what it says to solve the issue and then try `git push` again.
        > We need to follow what the error says only once. After we push to the new branch this time, `git push` will not throw any error.

### 4. Check your push on our GitHub repo
- Go to our repo on GitHub
- Switch to the branch you created in step 1. You'll see what you've committed on your local.
