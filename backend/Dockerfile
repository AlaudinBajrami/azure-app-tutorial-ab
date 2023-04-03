FROM openjdk
WORKDIR /workspace/app

# Env variable ALLOWED_ORIGINS is needed here for the test container to come up
ENV ALLOWED_ORIGINS=''

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

# Make script executable
RUN chmod +x mvnw

RUN ./mvnw install

ENTRYPOINT ["./mvnw", "spring-boot:run"]