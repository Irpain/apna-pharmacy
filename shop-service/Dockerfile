FROM openjdk
ADD ./target/shop-service-0.0.1-SNAPSHOT.jar /usr/src/shop-service-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar", "shop-service-0.0.1-SNAPSHOT.jar"]