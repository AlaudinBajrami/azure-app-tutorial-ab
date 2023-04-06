FROM alpine

# Install Java 17
RUN apk --no-cache add openjdk17 --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community
ENV JAVA_HOME /usr/lib/jvm/java-17-openjdk

# install Kotlin
RUN apk add --no-cache bash && \
    apk add --no-cache -t build-dependencies wget && \
    cd /usr/lib && \
    wget https://github.com/JetBrains/kotlin/releases/download/v1.8.0/kotlin-compiler-1.8.0.zip && \
    unzip kotlin-compiler-*.zip && \
    rm kotlin-compiler-*.zip && \
    rm kotlinc/bin/*.bat && \
    apk del --no-cache build-dependencies

ENV PATH $PATH:/usr/lib/kotlinc/bin

WORKDIR /workspace/app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# resolve dependencies on changed pom.xml
RUN ./mvnw dependency:go-offline

COPY src src

# Make script executable
RUN chmod +x mvnw

RUN ./mvnw install -DskipTests

ENTRYPOINT ["./mvnw", "spring-boot:run"]