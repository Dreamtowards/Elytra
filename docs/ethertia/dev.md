# Dev

## Lifetime

整个游戏/程序的生命周期

> 如你所见，这里没有用OOP的方式(用某个 "class Engine" 来包裹)。因为没有想到 什么情况下会在一个进程内运行多个引擎实例  
> 因为这里默认遵循 “如无必要 勿增实体”，“不要过早优化”，每个功能应该有他存在的原因。否则可能反而会负优化。

```cpp
void main() 
{
    Init();

    while (g_IsRunning)
    {
        RunMainLoop();
    }

    Destroy();
}
```

### Init & Destroy
```cpp
static void Init() 
{
    BENCHMARK_TIMER_MSG("System initialized in {}.\n");
    Settings::Load();

    Window::Init(Settings::WindowSize);

    Mods::Init();  // ScriptSystem. NativeMods

    RenderEngine::Init();
    Imgui::Init();

    Physics::Init();

    AudioEngine::Init();
    NetworkSystem::Init();
    
    InitConsoleThread();

    g_ThreadPool = std::make_unique<stdx::thread_pool>(std::min(16u, std::thread::hardware_concurrency()));
    g_MainThreadId = std::this_thread::get_id();
    g_IsRunning = true;
}

static void Destroy()
{
    Settings::Save();
    
    if (et::GetWorld()) {
        et::UnloadWorld();
    }

    Physics::Destroy();
    RenderEngine::Destroy();
    Window::Destroy();
}
```


### MainLoop
```cpp
static void RunMainLoop()
{
    ET_PROFILE("MainLoop");
    auto& timer = g_Timer;
    auto* world = g_World;

    timer.Update();

    {
        ET_PROFILE("Inputs");
        HandleInputs();
    }

    if (world) {
        ET_PROFILE("WorldTick");
        while (timer.PollTick()) 
        {
            world->FixedUpdate();
        }
    }
    
    {
        RenderUI();

        ET_PROFILE("RenderWorld");
        RenderEngine::RenderWorld(world);
    }

    glfwSwapBuffers(Window::Handle());
}

void HandleInput() 
{
    Window::PollEvents();


}

void RenderUI() 
{
    ET_PROFILE("UI");
    {
        ET_PROFILE("Imgui::NewFrame");
        Imgui::NewFrame();
    }
    ET_PROFILE("Imgui::ShowWindows");
    Imw::ShowDockspaceAndMainMenubar();
    Imgui::ShowWindows();
    Imgui::Render();
}
```

## Core

### Preprocessor

```cpp
#pragma once
```

Namespace

```cpp
#define ET_NAMESPACE et
#define ET_NAMESPACE_BEGIN namespace ET_NAMESPACE {
#define ET_NAMESPACE_END }
```

Version
```cpp
#define ET_VERSION_MAJOR 0
#define ET_VERSION_MINOR 0
#define ET_VERSION_PATCH 3
```

### Timer

```cpp
class Timer {
    float m_Delta;
    float m_TimeLast = 0;
    float m_TicksElapsed = 0;
    static int TicksPerSecond = 20;

    void Update() {
        float time = Time();

        if (m_TimeLast == 0)
            m_TimeLast = time;

        float delta = time - m_TimeLast;

        m_TicksElapsed += delta * TicksPerSecond;
        m_TimeLast = time;
        m_Delta = delta;
    }

    bool PollTick() {
        if (m_TicksElapsed < 1.0)
            return false;
        m_TicksElapsed -= 1.0;
        return true;
    }

    // Time since Startup
    float Time() {
        return Window::PerciseTime();
    }

    static uint64_t TimestampMS() {
        return std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::system_clock::now().time_since_epoch()).count();
    }
    static double TimestampNS() {  // 1ns = 1,000,000,000,  * 0.000000001
        return std::chrono::duration_cast<std::chrono::nanoseconds>(std::chrono::high_resolution_clock::now().time_since_epoch()).count();
    }

}
```

### Log


## EventBus


## World

```cpp

void et::LoadWorld(const std::string& savedir, const WorldInfo* worldinfo) {
    ET_ASSERT(g_World == nullptr);
    
}

void et::UnloadWorld();


class World 
{
    entt::registry m_ECS;

    PxScene* m_PxScene;

    bool Raycast(Vec3 origin, Vec3 dir, f32 maxDistance, Vec3& outPos) const;


    bool IsPaused();
    void SetPaused(bool paused);
    void SetPausedSteps(int steps);
}

```