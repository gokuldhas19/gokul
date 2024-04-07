import styles from "./GokulDhasDefault.module.css";

const GokulDhasDefault = () => {
  return (
    <div className={styles.gokulDhasdefault}>
      <section className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <b className={styles.gokulgmailcom}>gokul@gmail.com</b>
                </div>
                <b className={styles.b}>9678435123</b>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <h1 className={styles.beyondSustainability}>
                  Beyond Sustainability
                </h1>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent2}>
                  <div className={styles.homeParent}>
                    <b className={styles.home}>Home</b>
                    <b className={styles.aboutUs}>About Us</b>
                    <div className={styles.productWrapper}>
                      <b className={styles.product}>Product</b>
                    </div>
                    <div className={styles.serviceWrapper}>
                      <b className={styles.service}>Service</b>
                    </div>
                  </div>
                  <div className={styles.feedbackFormParent}>
                    <div className={styles.feedbackForm} />
                    <b className={styles.feedback}>Feedback</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/rectangle-4@2x.png"
          />
          <div className={styles.frameWrapper2}>
            <div className={styles.frameParent3}>
              <div className={styles.frameParent4}>
                <div className={styles.carbonManagementWrapper}>
                  <b className={styles.carbonManagement}>Carbon Management</b>
                </div>
                <div className={styles.rectangleParent1}>
                  <textarea
                    className={styles.rectangleTextarea}
                    rows={9}
                    cols={31}
                  />
                  <b className={styles.measureCarbonEmissionsContainer}>
                    <span>
                      <p className={styles.measureCarbonEmissions}>
                        Measure carbon emissions and the supply chain of your
                        business
                      </p>
                      <p className={styles.developDeCarbonizationProje}>
                        Develop de-carbonization projects
                      </p>
                      <p className={styles.offsetYourCarbon}>
                        Offset your carbon emissions through offset projects
                      </p>
                    </span>
                  </b>
                </div>
              </div>
              <div className={styles.frameWrapper3}>
                <div className={styles.esgStrategyParent}>
                  <b className={styles.esgStrategy}>ESG Strategy</b>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.rectangleParent2}>
                      <textarea
                        className={styles.frameChild1}
                        rows={10}
                        cols={31}
                      />
                      <b className={styles.integrateEsgStrategiesContainer}>
                        <span>
                          <p className={styles.integrateEsgStrategies}>
                            Integrate ESG strategies and governance frameworks
                          </p>
                          <p className={styles.identifyEsgRisks}>
                            Identify ESG risks and opportunities
                          </p>
                          <p
                            className={styles.esgDashboards}
                          >{`ESG dashboards & reports`}</p>
                          <p className={styles.generateAYearly}>
                            Generate a yearly ESG report
                          </p>
                        </span>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.beyondSustainabilityTeamParent}>
        <b className={styles.beyondSustainabilityTeam}>
          Beyond Sustainability team
        </b>
        <div className={styles.rectangleDiv} />
        <b className={styles.inBeyondSustainabilityContainer}>
          <span>
            <p className={styles.blankLine}>&nbsp;</p>
            <p
              className={styles.inBeyondSustainability}
            >{`In Beyond Sustainability, challenging times are never stressful, but rather `}</p>
            <p className={styles.bringOutOnesBestQualities}>
              <span>
                bring out one's best qualities. The sense of purpose and the
                judgement-free workspace make me look forward to each
              </span>
              <span className={styles.span}>{` `}</span>
            </p>
            <p className={styles.iveRediscoveredMyLoveFor}>
              <span className={styles.span1}>{` `}</span>
              <span>
                I've rediscovered my love for learning, science and all nerdy
                stuff in Beyond Sustainability.”
              </span>
            </p>
          </span>
        </b>
      </section>
    </div>
  );
};

export default GokulDhasDefault;
