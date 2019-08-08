<template>
  <div id="app" class="st-pusher">
    <nav class="navbar navbar-inverse navbar-fixed-top navbar-smartleader hidden-print">
      <div class="container">
        <div class="navbar-header">
          <a href="/" class="pull-left navbar-navbar-brand">
            <div class="desktop_view">
              <img
                alt="image"
                width="26"
                style="margin:2px 0px 8px 9px"
                :src="$rootPath + '/img/esquilo-novo.png'"
              />
            </div>
            <div class="mobile_view">
              <img
                alt="image"
                width="34"
                style="margin-top:10px"
                :src="$rootPath + '/img/squirrel-head-512.svg'"
              />
            </div>
          </a>
          <div class="pull-right icon-right">
            <dropdown ref="dropdown">
              <btn type="primary" class="dropdown-toggle" style="background: #0D1A3A;border: none">
                <img :src="$basePath('/img/language/' + $i18n.locale + '.png')" height="20" />
                <span class="caret" style="color:#dfe4ed;margin-left:5px;"></span>
              </btn>
              <template slot="dropdown">
                <li v-if="$i18n.locale !== 'pt_BR'">
                  <a @click.prevent.stop="$changeLocale('pt_BR')" role="button">
                    <img :src="$basePath('/img/language/pt_BR.png')" height="20" />
                    &nbsp;{{$t('lang.portuguese')}}
                  </a>
                </li>
                <li v-if="$i18n.locale !== 'en_US'">
                  <a @click.prevent.stop="$changeLocale('en_US')" role="button">
                    <img :src="$basePath('/img/language/en_US.png')" height="20" />
                    &nbsp;{{$t('lang.english')}}
                  </a>
                </li>
                <li v-if="$i18n.locale !== 'es_ES'">
                  <a @click.prevent.stop="$changeLocale('es_ES')" role="button">
                    <img :src="$basePath('/img/language/es_ES.png')" height="20" />
                    &nbsp;{{$t('lang.spanish')}}
                  </a>
                </li>
              </template>
            </dropdown>

            <a
              href="#"
              @click.prevent
              class="btn-ajuda btn btn-xs btn-foco hidden-xs"
              style="background-color:#607d8b;border: 1px solid #607d8b;margin-right:10px;color:#dfe4ed"
            >
              <i class="far fa-globe-americas"></i>
              {{$t('strategy.title')}}
            </a>

            <a
              href="http://help.smartleader.com.br"
              target="_blank"
              class="btn-ajuda btn btn-xs btn-fococ"
              style="background-color:#2f4050;border: 1px solid #2f4050;color:#dfe4ed"
            >{{$t('app.helpcenter')}}</a>

            <a href="#" @click.prevent class style="color:#ffffff;padding: 0 10px;">
              <i class="fas fa-bell fa-lg"></i>
            </a>

            <div
              style="background-color: rgb(212, 212, 212);margin-top:-4px;
                width: 40px;border-radius: 40px;height: 40px;display: inline-block;display:inline-flex;
                vertical-align: middle;margin: 0 10px;"
            >&nbsp;</div>

            <dropdown ref="dropdown">
              <a
                href="#"
                type="primary"
                class="dropdown-toggle block m-t-xs"
                style="font-weight:600;color:#dfe4ed"
              >
                {{mock.user}}
                <span class="caret" style="color:#dfe4ed;margin-left:5px;"></span>
              </a>
              <template slot="dropdown">
                <li>
                  <a @click.prevent role="button">
                    <i class="fas fa-cog"></i>
                    &nbsp;{{$t('setup.title')}}
                  </a>
                </li>
                <li>
                  <a @click.prevent role="button">
                    <i class="fa fa-pencil fa-fw"></i>
                    &nbsp;{{$t('app.change-password')}}
                  </a>
                </li>
                <li class="hidden-md hidden-lg">
                  <a @click.prevent role="button">
                    <i class="fas fa-globe-americas"></i>
                    &nbsp;{{$t('strategy.title')}}
                  </a>
                </li>
                <li class="hidden-md hidden-lg">
                  <a @click.prevent role="button">
                    <i class="far fa-question-circle fa-fw"></i>
                    &nbsp;{{$t('app.helpcenter')}}
                  </a>
                </li>
                <li>
                  <a @click.prevent role="button">
                    <i class="fa fa-power-off fa-fw"></i>
                    &nbsp;{{$t('app.logout')}}
                  </a>
                </li>
              </template>
            </dropdown>
          </div>
        </div>
      </div>
    </nav>
    <div id="nav" class="tabs tabs-style-underline hidden-print">
      <nav>
        <ul>
          <router-link
            :key="item.name"
            v-for="item in mainMenu"
            :to="item.path"
            tag="li"
            :class="{' tab-current':$route.name === item.name}"
          >
            <a>
              <span class="icon hidden-lg hidden-md">
                <i :class="item.icon"></i>
              </span>
              <small style="font-size: 0.8em;">
                <i class="icon" :class="item.icon"></i>
              </small>
              <span>{{ $t(item.label)}}</span>
            </a>
          </router-link>
        </ul>
      </nav>
    </div>
    <router-view ref="content" />

    <div
      class="fixed-action-btn"
      type="button"
      data-toggle="modal"
      data-target="#smartHelp"
      style="bottom: 24px; right: 24px;"
    >
      <span class="btn-floating btn-large btn-foco">
        <i class="fa fa-envelope" style="font-size: 1.8em;"></i>
      </span>
    </div>

    <div class="hidden-print hidden-xs" style="padding: 20px 0 20px 0;">
      <hr />
      <footer>
        <p>{{$t('app.copyright')}} {{$t('app.url')}}</p>
      </footer>
    </div>

    <div class="visible-print" style="position: fixed;bottom: 0; visibility:printonly">
      <footer class="footer_goals">
        <hr style="margin-bottom:10px;margin-top:10px;" />
        <p class="text-muted">{{$t('app.url')}}</p>
      </footer>
    </div>
  </div>
</template>
<script>
import "./core/assets/fontawesome5/css/all.min.css";
export default {
  data: function() {
    return {
      mock: {
        user: "Admin - Smartleader"
      },
      mainMenu: [
        {
          name: "home",
          label: "home.title",
          path: "/",
          icon: "fal fa-home"
        },
        {
          name: "team",
          label: "team.title",
          path: "/team",
          icon: "fal fa-users"
        },
        {
          name: "goal",
          label: "goals.title",
          path: "goal",
          icon: "far fa-crosshairs"
        },
        {
          name: "development",
          label: "development.title",
          path: "/development",
          icon: "fal fa-sliders-h"
        },
        {
          name: "feedback",
          label: "feedback.title",
          path: "feedback",
          icon: "fal fa-comments"
        },
        {
          name: "training",
          label: "training.title",
          path: "training",
          icon: "fal fa-graduation-cap"
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
