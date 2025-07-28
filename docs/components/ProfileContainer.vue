<template>
    <div class="profile-container">
      <div style="display: flex; align-items: center; justify-content: flex-start; gap: 1rem;">
        <img src="/images/Profile.jpg" alt="Nguyễn Việt Tùng" class="profile-avatar" />

        <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 0.5rem;">
          <h1 class="profile-name">Nguyễn Việt Tùng</h1>
          <div class="profile-role">Web Developer</div>
        </div>
      </div>

      <div class="profile-socials">
          <a href="https://github.com/nguyenviettung7691" title="Github" target="_blank">
              <img src="https://cdn.simpleicons.org/github/9E95B7?viewbox=auto" />
          </a>
          <a href="https://www.linkedin.com/in/nguyen-viet-tung" title="LinkedIn" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" />
          </a>
          <a href="https://medium.com/@nvtung" title="Medium" target="_blank">
              <img src="https://cdn.simpleicons.org/medium/fff?viewbox=auto" />
          </a>
          <a href="https://stackoverflow.com/users/1437108/harry" title="Stackoverflow" target="_blank">
              <img src="https://cdn.simpleicons.org/stackoverflow?viewbox=auto" />
          </a>
          <a href="mailto:nvtung.harry@gmail.com" title="Email" target="_blank">
              <img src="https://cdn.simpleicons.org/gmail?viewbox=auto" />
          </a>
      </div>
    </div>
</template>

<style lang="scss">

/* Profile Container */
.profile-container {
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  padding: 1rem 2rem;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background: url('/bg-profile.jpg') no-repeat center;
    background-size: cover;
    background-color: #9BBC23;
    border-radius: 15px;
    opacity: 0.7;
    transition: all 0.3s ease;
  }
  &:hover {
    &:after {
      opacity: 1;
    }
    .profile-avatar, .profile-role {
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.55);
    }
    .profile-name {
      text-shadow: rgba(0, 0, 0, 0.85) 1px 0 10px;
    }
    .profile-socials {
      img {
        filter: drop-shadow(10px 10px 5px #222);
      }
    }
  }
}

/* Avatar */
.profile-avatar {
  border-radius: 50%;
  width: 7rem;
  object-fit: cover;
  display: inline-block;
  transition: all 0.3s ease;
}

/* Name and Role */
.profile-name {
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.3s ease;
}

.profile-role {
  display: inline-block;
  background: #ffffff;
  color: #333;
  border-radius: 9999px;
  padding: 0.4em 1em;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

/* Socials */
.profile-socials {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.2rem;
  img {
    width: 1.5rem;
    transition: all 0.3s ease;
  }
}

/* Download Button */
.download-btn {
  background-color: var(--vp-c-brand-1);
  color: #fff !important;
  padding: 0.4em 1.4em;
  text-align: center;
  margin: 0 auto;
  border-radius: 2rem;
  text-decoration: none !important;
  font-weight: 600;
  box-shadow: 0 4px 12px var(--vp-shadow-3);
  transition: background 0.3s ease;
  &:hover {
    background-color: var(--vp-c-brand-2);
  }
}

.flag {
  display: inline-block;
}

/* Interest Tags */
.interest-tag {
  display: inline-block;
  background: #fff;
  color: #333;
  padding: 0.2em 0.4em;
  border-radius: 999px;
  font-size: 0.9rem;
  margin: 0 0.3rem 0.5rem 0;
  box-shadow: 0 1px 4px var(--vp-c-brand-soft);
}
</style>