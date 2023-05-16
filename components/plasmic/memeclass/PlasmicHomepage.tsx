// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5UuLtd2YVKpnVBJnhuuMPJ
// Component: BkzO7WVFZyb0

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { NavigationBar } from "@plasmicpkgs/plasmic-nav"; // plasmic-import: jGx9tiKJoex/codeComponent
import Button from "../../Button"; // plasmic-import: O5nJGhtpL8X/component

import { useScreenVariants as useScreenVariantsg0Boff3G44Tdt } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: G0boff3g44tdt/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_memeclass.module.css"; // plasmic-import: 5UuLtd2YVKpnVBJnhuuMPJ/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: BkzO7WVFZyb0/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: Dnccc_hbjrY/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: _4bpg61FWKm/icon

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  hero?: p.Flex<"section">;
  navigationBar?: p.Flex<typeof NavigationBar>;
  container?: p.Flex<"div">;
  about?: p.Flex<"section">;
  floorframe?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  howto?: p.Flex<"section">;
  stickynotes?: p.Flex<"div">;
  stickynotes2?: p.Flex<"div">;
  stickynotes3?: p.Flex<"div">;
  stickynotes4?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
  tokenomics?: p.Flex<"section">;
  h3?: p.Flex<"h3">;
  roadmap?: p.Flex<"section">;
  footer?: p.Flex<"section">;
  h6?: p.Flex<"h6">;
};

export interface DefaultHomepageProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsg0Boff3G44Tdt()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <section
            data-plasmic-name={"hero"}
            data-plasmic-override={overrides.hero}
            className={classNames(projectcss.all, sty.hero)}
          >
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox___6UMjR)}>
                <NavigationBar
                  data-plasmic-name={"navigationBar"}
                  data-plasmic-override={overrides.navigationBar}
                  brand={
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link___2Wtiy
                      )}
                      component={Link}
                      href={"#" as const}
                      platform={"nextjs"}
                    >
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__xDeXg)}
                        displayHeight={"40px" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"none" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"auto" as const}
                        src={{
                          src: "/plasmic/memeclass/images/pffttokenImaginepng.png",
                          fullWidth: 396,
                          fullHeight: 396,
                          aspectRatio: undefined
                        }}
                      />
                    </p.PlasmicLink>
                  }
                  className={classNames("__wab_instance", sty.navigationBar)}
                  closeButton={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__zvplC)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"none" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      src={"https://static1.plasmic.app/close.svg" as const}
                    />
                  }
                  itemsGap={24 as const}
                  menuItems={
                    <React.Fragment>
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          sty.link__k23Rf
                        )}
                        component={Link}
                        href={"/" as const}
                        platform={"nextjs"}
                      >
                        {"Home"}
                      </p.PlasmicLink>
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          sty.link__qLhqC
                        )}
                        component={Link}
                        href={"/" as const}
                        platform={"nextjs"}
                      >
                        {"About"}
                      </p.PlasmicLink>
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          sty.link__adNsk
                        )}
                        component={Link}
                        href={"/" as const}
                        platform={"nextjs"}
                      >
                        {"How to Buy"}
                      </p.PlasmicLink>
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          sty.link__cjval
                        )}
                        component={Link}
                        href={"/" as const}
                        platform={"nextjs"}
                      >
                        {"Tokenomics"}
                      </p.PlasmicLink>
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          sty.link__hRo0
                        )}
                        component={Link}
                        href={"/" as const}
                        platform={"nextjs"}
                      >
                        {"Roadmap"}
                      </p.PlasmicLink>
                    </React.Fragment>
                  }
                  openButton={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__slF6M)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"none" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      src={"https://static1.plasmic.app/menu.svg" as const}
                    />
                  }
                  responsiveBreakpoint={768 as const}
                />
              </div>
            ) : null}
            <div
              data-plasmic-name={"container"}
              data-plasmic-override={overrides.container}
              className={classNames(projectcss.all, sty.container)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__cUhGs)}>
                <h1
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1___5Rr4B
                  )}
                >
                  {"PFFFT"}
                </h1>
                <h5
                  className={classNames(
                    projectcss.all,
                    projectcss.h5,
                    projectcss.__wab_text,
                    sty.h5__wPwlE
                  )}
                >
                  {
                    "Here we go again! We are here to stay!\nPffft is more than memecoin, pffft is movement!"
                  }
                </h5>
              </div>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__pQzGb)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/memeclass/images/lightpng.png",
                  fullWidth: 195,
                  fullHeight: 203,
                  aspectRatio: undefined
                }}
              />

              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div
                  className={classNames(projectcss.all, sty.freeBox__txxx8)}
                />
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div
                  className={classNames(projectcss.all, sty.freeBox__qcIc)}
                />
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div
                  className={classNames(projectcss.all, sty.freeBox__dBm4M)}
                />
              ) : null}
            </div>
          </section>
          <section
            data-plasmic-name={"about"}
            data-plasmic-override={overrides.about}
            className={classNames(projectcss.all, sty.about)}
          >
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox___6Opc)}>
                <div
                  data-plasmic-name={"floorframe"}
                  data-plasmic-override={overrides.floorframe}
                  className={classNames(projectcss.all, sty.floorframe)}
                />

                <div className={classNames(projectcss.all, sty.freeBox__ly86S)}>
                  <div
                    className={classNames(projectcss.all, sty.columns__dsxpK)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__y4Ri9)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__kToT
                        )}
                      >
                        <h2
                          data-plasmic-name={"h2"}
                          data-plasmic-override={overrides.h2}
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2
                          )}
                        >
                          {"About $PFFFT"}
                        </h2>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__vnHdO
                          )}
                        >
                          {
                            '$PFFFT Token is a unique crypto project that focuses solely on the memecoin ecosystem across all blockchain chains. The project introduces a memecoin token named "$PFFFT" with a total supply of 500,000,000,000,000 PFFFT, built on the ZySync Era Blockchain.\nThe goal of $PFFFT Token is to provide a platform for the development and growth of the memecoin market, which has seen a surge in popularity in recent years. The project aims to leverage the unique and fun aspects of memecoins to create a community-driven ecosystem that encourages engagement and participation.'
                          }
                        </div>
                      </p.Stack>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__dqy5T)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__mOpf6
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </section>
          <section
            data-plasmic-name={"howto"}
            data-plasmic-override={overrides.howto}
            className={classNames(projectcss.all, sty.howto)}
          >
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__zmUKi)}>
                <div className={classNames(projectcss.all, sty.freeBox__k79Ee)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__g8Nx)}
                  >
                    <h1
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1__xuCwE
                      )}
                    >
                      {"How to Buy?"}
                    </h1>
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.columns___8IoDg
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column___0V14P
                        )}
                      >
                        <p.Stack
                          as={"div"}
                          data-plasmic-name={"stickynotes"}
                          data-plasmic-override={overrides.stickynotes}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.stickynotes
                          )}
                        >
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__m6Dx8)}
                            displayHeight={"auto" as const}
                            displayMaxHeight={"none" as const}
                            displayMaxWidth={"100%" as const}
                            displayMinHeight={"0" as const}
                            displayMinWidth={"0" as const}
                            displayWidth={"auto" as const}
                            loading={"lazy" as const}
                            src={{
                              src: "/plasmic/memeclass/images/clampng.png",
                              fullWidth: 11,
                              fullHeight: 66,
                              aspectRatio: undefined
                            }}
                          />

                          <h5
                            className={classNames(
                              projectcss.all,
                              projectcss.h5,
                              projectcss.__wab_text,
                              sty.h5__ieK4D
                            )}
                          >
                            {"Create Wallet"}
                          </h5>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__c1HjC
                            )}
                          >
                            {
                              "download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io"
                            }
                          </div>
                        </p.Stack>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__pJxhp
                        )}
                      >
                        <p.Stack
                          as={"div"}
                          data-plasmic-name={"stickynotes2"}
                          data-plasmic-override={overrides.stickynotes2}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.stickynotes2
                          )}
                        >
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__ar3S1)}
                            displayHeight={"auto" as const}
                            displayMaxHeight={"none" as const}
                            displayMaxWidth={"100%" as const}
                            displayMinHeight={"0" as const}
                            displayMinWidth={"0" as const}
                            displayWidth={"auto" as const}
                            loading={"lazy" as const}
                            src={{
                              src: "/plasmic/memeclass/images/clampng.png",
                              fullWidth: 11,
                              fullHeight: 66,
                              aspectRatio: undefined
                            }}
                          />

                          <h5
                            className={classNames(
                              projectcss.all,
                              projectcss.h5,
                              projectcss.__wab_text,
                              sty.h5___0Xopi
                            )}
                          >
                            {"Join Whitelist"}
                          </h5>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__yntIj
                            )}
                          >
                            {
                              "Submit your wallet address to be able to join the whitelist"
                            }
                          </div>
                        </p.Stack>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__uSdup
                        )}
                      >
                        <p.Stack
                          as={"div"}
                          data-plasmic-name={"stickynotes3"}
                          data-plasmic-override={overrides.stickynotes3}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.stickynotes3
                          )}
                        >
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__rxsHd)}
                            displayHeight={"auto" as const}
                            displayMaxHeight={"none" as const}
                            displayMaxWidth={"100%" as const}
                            displayMinHeight={"0" as const}
                            displayMinWidth={"0" as const}
                            displayWidth={"auto" as const}
                            loading={"lazy" as const}
                            src={{
                              src: "/plasmic/memeclass/images/clampng.png",
                              fullWidth: 11,
                              fullHeight: 66,
                              aspectRatio: undefined
                            }}
                          />

                          <h5
                            className={classNames(
                              projectcss.all,
                              projectcss.h5,
                              projectcss.__wab_text,
                              sty.h5__wsrwk
                            )}
                          >
                            {"Go to our launchpad"}
                          </h5>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__qsk
                            )}
                          >
                            {
                              "enter our web launchpad and connect your metamask wallet to check if you are eligible to get PFFFT"
                            }
                          </div>
                        </p.Stack>
                      </div>
                      <div
                        className={classNames(projectcss.all, sty.column__saey)}
                      >
                        <p.Stack
                          as={"div"}
                          data-plasmic-name={"stickynotes4"}
                          data-plasmic-override={overrides.stickynotes4}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.stickynotes4
                          )}
                        >
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__mhDZh)}
                            displayHeight={"auto" as const}
                            displayMaxHeight={"none" as const}
                            displayMaxWidth={"100%" as const}
                            displayMinHeight={"0" as const}
                            displayMinWidth={"0" as const}
                            displayWidth={"auto" as const}
                            loading={"lazy" as const}
                            src={{
                              src: "/plasmic/memeclass/images/clampng.png",
                              fullWidth: 11,
                              fullHeight: 66,
                              aspectRatio: undefined
                            }}
                          />

                          <h5
                            className={classNames(
                              projectcss.all,
                              projectcss.h5,
                              projectcss.__wab_text,
                              sty.h5___6AOeN
                            )}
                          >
                            {"Buy $Pffft with ETH"}
                          </h5>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__d5Ndv
                            )}
                          >
                            {
                              "buy $PFFFT using ETH We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility."
                            }
                          </div>
                        </p.Stack>
                      </div>
                    </p.Stack>
                    <Button
                      data-plasmic-name={"button"}
                      data-plasmic-override={overrides.button}
                      className={classNames("__wab_instance", sty.button)}
                      color={"yellow" as const}
                    >
                      {"Buy $PFFFT Now"}
                    </Button>
                  </div>
                </div>
              </div>
            ) : null}
          </section>
          <section
            data-plasmic-name={"tokenomics"}
            data-plasmic-override={overrides.tokenomics}
            className={classNames(projectcss.all, sty.tokenomics)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__cpk5L)}>
              <div className={classNames(projectcss.all, sty.freeBox__fbGsp)}>
                <h1
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1__zBx0H
                  )}
                >
                  {"Tokenomics"}
                </h1>
                <div
                  className={classNames(projectcss.all, sty.columns___8CrsL)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.column__arThv)}
                  >
                    <h3
                      data-plasmic-name={"h3"}
                      data-plasmic-override={overrides.h3}
                      className={classNames(
                        projectcss.all,
                        projectcss.h3,
                        projectcss.__wab_text,
                        sty.h3
                      )}
                    >
                      {"Token Supply:\n420,000,000,000,000"}
                    </h3>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__dh8CO
                      )}
                    >
                      {
                        "No Taxes, No Bullshit. It’s that simple.\n93.1% of the tokens were sent to the liquidity pool, LP tokens were burnt, and contract is renounced. The remaining 6.9% of the supply is being held in a multi-sig wallet only to be used as tokens for future centralized exchange listings, bridges, and liquidity pools. This wallet is easily trackable"
                      }
                    </div>
                  </p.Stack>
                  <div
                    className={classNames(projectcss.all, sty.column__qDuMq)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__khRwp)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/memeclass/images/pffttokenImaginepng.png",
                        fullWidth: 396,
                        fullHeight: 396,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            data-plasmic-name={"roadmap"}
            data-plasmic-override={overrides.roadmap}
            className={classNames(projectcss.all, sty.roadmap)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__myNwL)}>
              <div className={classNames(projectcss.all, sty.freeBox__sNljD)}>
                <h1
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1__kzrd3
                  )}
                >
                  {"Roadmap"}
                </h1>
                <div
                  className={classNames(projectcss.all, sty.freeBox___5Cj6H)}
                >
                  <h1
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1__akzJ
                    )}
                  >
                    {"PFFFT"}
                  </h1>
                </div>
              </div>
            </div>
          </section>
          <section
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames(projectcss.all, sty.footer)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__voUBo)}>
              <div className={classNames(projectcss.all, sty.freeBox__dUyO)}>
                <h6
                  data-plasmic-name={"h6"}
                  data-plasmic-override={overrides.h6}
                  className={classNames(
                    projectcss.all,
                    projectcss.h6,
                    projectcss.__wab_text,
                    sty.h6
                  )}
                >
                  {"made for fun by Pffft"}
                </h6>
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "hero",
    "navigationBar",
    "container",
    "about",
    "floorframe",
    "h2",
    "howto",
    "stickynotes",
    "stickynotes2",
    "stickynotes3",
    "stickynotes4",
    "button",
    "tokenomics",
    "h3",
    "roadmap",
    "footer",
    "h6"
  ],
  hero: ["hero", "navigationBar", "container"],
  navigationBar: ["navigationBar"],
  container: ["container"],
  about: ["about", "floorframe", "h2"],
  floorframe: ["floorframe"],
  h2: ["h2"],
  howto: [
    "howto",
    "stickynotes",
    "stickynotes2",
    "stickynotes3",
    "stickynotes4",
    "button"
  ],
  stickynotes: ["stickynotes"],
  stickynotes2: ["stickynotes2"],
  stickynotes3: ["stickynotes3"],
  stickynotes4: ["stickynotes4"],
  button: ["button"],
  tokenomics: ["tokenomics", "h3"],
  h3: ["h3"],
  roadmap: ["roadmap"],
  footer: ["footer", "h6"],
  h6: ["h6"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  hero: "section";
  navigationBar: typeof NavigationBar;
  container: "div";
  about: "section";
  floorframe: "div";
  h2: "h2";
  howto: "section";
  stickynotes: "div";
  stickynotes2: "div";
  stickynotes3: "div";
  stickynotes4: "div";
  button: typeof Button;
  tokenomics: "section";
  h3: "h3";
  roadmap: "section";
  footer: "section";
  h6: "h6";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    hero: makeNodeComponent("hero"),
    navigationBar: makeNodeComponent("navigationBar"),
    container: makeNodeComponent("container"),
    about: makeNodeComponent("about"),
    floorframe: makeNodeComponent("floorframe"),
    h2: makeNodeComponent("h2"),
    howto: makeNodeComponent("howto"),
    stickynotes: makeNodeComponent("stickynotes"),
    stickynotes2: makeNodeComponent("stickynotes2"),
    stickynotes3: makeNodeComponent("stickynotes3"),
    stickynotes4: makeNodeComponent("stickynotes4"),
    button: makeNodeComponent("button"),
    tokenomics: makeNodeComponent("tokenomics"),
    h3: makeNodeComponent("h3"),
    roadmap: makeNodeComponent("roadmap"),
    footer: makeNodeComponent("footer"),
    h6: makeNodeComponent("h6"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
